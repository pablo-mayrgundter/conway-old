import { StepIndexEntry } from "../../dependencies/conway-ds/src/parsing/step/step_parser";
import StepVtableBuilder from "../../dependencies/conway-ds/src/parsing/step/step_vtable_builder";
import StepEntityBase from "./step_entity_base";
import StepEntitySchema from "./step_entity_schema";
import { StepEntityInternalReferencePrivate } from "./step_entity_internal_reference";
import { IIndexSetCursor } from "../../dependencies/conway-ds/src/indexing/i_index_set_cursor";
import { extractOneHotLow } from "../../dependencies/conway-ds/src/indexing/bit_operations";
import { MultiIndexSet } from "../../dependencies/conway-ds/src/indexing/multi_index_set";
import StepEntityConstructor, { StepEntityConstructorAbstract } from "./step_entity_constructor";

const clz = Math.clz32;

export default abstract class StepModelBase< EntityTypeIDs extends number, BaseEntity extends StepEntityBase< EntityTypeIDs > = StepEntityBase< EntityTypeIDs > > implements Iterable< BaseEntity >
{
    public readonly abstract typeIndex: MultiIndexSet< EntityTypeIDs >;

    private readonly vtableBuilder_: StepVtableBuilder = new StepVtableBuilder();
    private readonly expressIDMap_                     = new Map< number, number >();
    private readonly inlineAddressMap_                 = new Map< number, number >();
    private readonly elementIndex_: StepEntityInternalReferencePrivate< EntityTypeIDs, BaseEntity >[];

    /**
     * Construct this step model with its matching schema, a buffer to read from and an element index.
     * 
     * @param schema The Step schema this is based on.
     * @param buffer_ The buffer to read this from.
     * @param elementIndex The element index for this, parsed or deserialized - note this takes ownership of this array in the sense it will modify values/unfold inline elements etc.
     */
    constructor( public readonly schema: StepEntitySchema< EntityTypeIDs, BaseEntity >, private readonly buffer_: Uint8Array, elementIndex: StepIndexEntry< EntityTypeIDs >[] ) 
    {
        let localElementIndex: StepEntityInternalReferencePrivate< EntityTypeIDs, BaseEntity >[] = elementIndex;

        let indexId = 0;
        let where   = 0;

        let inlineAddressMap = this.inlineAddressMap_;

        while ( where < localElementIndex.length )
        {
            let element = localElementIndex[ where ];

            if ( element.inlineEntities !== void 0 )
            {
                let inlineLocalId = localElementIndex.length;

                localElementIndex.push( ...element.inlineEntities );

                // We're going to map inline elements backwards.
                for ( ; inlineLocalId < localElementIndex.length; ++inlineLocalId )
                {
                    inlineAddressMap.set( localElementIndex[ inlineLocalId ].address, inlineLocalId );
                }
            }

            ++where;
        }

        // Continguous dense array map from express IDs.
        for ( let element of elementIndex )
        {
            if ( element.expressID !== void 0 )
            {
                this.expressIDMap_.set( element.expressID, indexId++ );
            }
        }
        
        this.elementIndex_ = localElementIndex;
    }

    /**
     * Force the population of the the vtable entry for a particular ID (i.e. extracting the field locations) 
     * @param localID 
     * @returns 
     */
    public populateVtableEntry( localID: number ): boolean
    {
        if ( localID > this.elementIndex_.length )
        {
            throw new Error( `Invalid localID ${localID}` );
        }

        let element = this.elementIndex_[ localID ];
            
        if ( element.vtableIndex !== void 0 )
        {
            return true;
        }

        let extratedEntry = this.schema.parser.extractDataEntry( this.buffer_, element.address, element.address + element.length, this.vtableBuilder_ );
    
        if ( extratedEntry === void 0 )
        {            
            return false;
        }

        element.vtableIndex = extratedEntry[ 0 ];
        element.vtableCount = extratedEntry[ 1 ];
        element.buffer      = this.buffer_;
        element.vtable      = this.vtableBuilder_.buffer;

        return true; 
    }

    public get size(): number
    {
        return this.elementIndex_.length;
    }

    public getInlineElementByAddress( address: number | undefined ): BaseEntity | undefined
    {
        if ( address === void 0 )
        {
            return;
        }

        let localID = this.inlineAddressMap_.get( address );

        if ( localID === void 0 )
        {
            return;
        }

        return this.getElementByLocalID( localID );
    }
    
    public getElementByExpressID( expressID: number ): BaseEntity | undefined
    {
        let localID = this.expressIDMap_.get( expressID );

        if ( localID === void 0 )
        {
            return;
        }

        return this.getElementByLocalID( localID );
    }

    public getElementByLocalID( localID: number ): BaseEntity | undefined
    {
        if ( localID > this.elementIndex_.length )
        {
            return;
        }
        
        let element = this.elementIndex_[ localID ];
            
        let entity = element.entity;

        if ( entity === void 0 && element.typeID !== void 0 )
        {
            // TODO - we actually need to make this handle unknown type IDs by adding an ENTITY_UNKNOWN type - CS
            let constructorRead = this.schema.constructors[ element.typeID ]; 

            if ( constructorRead !== void 0 )
            {
                entity = new constructorRead( localID, element, this );

                element.entity = entity;
            }
        }

        return entity;
    }

    /**
     * Use the type index to get set of entities of a set of types including sub-types, acts as a union given the input type list, with lazy
     * iteration over the set.
     * @param types The list of types to return 
     * @returns An iterable corresponding to the lazy set of items.
     */
    public types< T extends StepEntityConstructorAbstract< EntityTypeIDs >[] >( ...types: T ): IterableIterator< InstanceType< T[ number ] > >
    {
        let distinctTypes = types.length === 1 ? ( types[ 0 ].query ) : ( new Set( types.flatMap( type => type.query ) ) );
        
        return this.from( this.typeIndex.cursor( ...distinctTypes ), true ) as IterableIterator< InstanceType< T[ number ] > >;
    }

    /**
     * Use the type index to get set of entities of a set of types not including sub-types from the list of type ids, acts as a union given the input type list, with lazy
     * iteration over the set.
     * @param types The type ids for the types to get.
     * @returns An iterable corresponding to the lazy set of items.
     */
    public typeIDs( ...types: EntityTypeIDs[] ) : IterableIterator< BaseEntity >
    {
        let distinctTypes = types.length === 1 ? ( this.schema.queries[ types[ 0 ] as number ] ) : ( new Set( types.flatMap( type => this.schema.queries[ type as number ] ) ) );

        return this.from( this.typeIndex.cursor( ...distinctTypes ), true );
    }

    /**
     * Use the type index to get set of entities of a set of types including sub-types from the list of type ids, acts as a union given the input type list, with lazy
     * iteration over the set.
     * @param types The type ids for the types to get.
     * @returns An iterable corresponding to the lazy set of items.
     */
    public typesIDSNoSubtypes( ...types: EntityTypeIDs[] ) : IterableIterator< BaseEntity >
    {
        return this.from( this.typeIndex.cursor( ...types ), true );
    }

    /**
     * Given a cursor, get the matching entities for it as a lazy iterable iterator.
     * @param cursor The cursor to iterate over.
     * @param freeCursor Should the cursor be freed after 
     */
    public *from( cursor: IIndexSetCursor, freeCursor: boolean = false ) : IterableIterator< BaseEntity >
    {
        while ( cursor.step() )
        {
            let high = cursor.high;
            let low  = cursor.low;
            
            while ( low !== 0 )
            {
                let lowestOneHot = extractOneHotLow( low );

                low ^= ( 1 << lowestOneHot );

                let localID = ( high | lowestOneHot );
                
                let foundElement = this.getElementByLocalID( localID );

                if ( foundElement !== void 0 )
                {
                    yield foundElement;
                }
            }
        }

        if ( freeCursor )
        {
            cursor.free();
        }
    }

    public *extract( from: Iterable< number > ) : IterableIterator< BaseEntity >
    {
        for ( let localID of from )
        {
            let foundElement = this.getElementByLocalID( localID );

            if ( foundElement !== void 0 )
            {
                yield foundElement;
            }
        }
    }

    public *[Symbol.iterator]() : IterableIterator< BaseEntity >
    {
        for ( let localID = 0, endID = this.elementIndex_.length; localID < endID; ++localID )
        {
            let foundElement = this.getElementByLocalID( localID );

            if ( foundElement !== void 0 )
            {
                yield foundElement;
            }
        }
    }
}