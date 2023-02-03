
// import { buffer } from "stream/consumers";
// import { ComponentTypeName } from "./component_set";
// import EntityComponentReference from "./entity_component_reference";
// import SchemaSpecification from "./schema_specification";
// import { SnapshotBuffer } from "./snapshot";
// import { SmartBuffer } from 'smart-buffer';
// import ComponentSpecification from "./component_specification";


// export default interface Entity< T extends SchemaSpecification >
// {
//     readonly isValid: boolean;

//     readonly isReadonly: boolean;

//     readonly fileID: number;
    
//     readonly specification: ComponentSpecification;

//     readonly dirty: boolean;

//     serialize( buffer: SmartBuffer ): void;
// }


// export type EntitySchema< T extends Entity< any > > = T extends Entity< infer U > ? U : never;


// // Entities are implemented via a hybrid fly-weight model, that uses memoization for writes/to cache expensive readsMy family, and this base-class
// // provides the supporting infrastruct
// export abstract class EntityBase< T extends SchemaSpecification > implements Entity< T >
// {    public abstract components: ComponentTypeName< T >[];

//     public abstract readonly specification: ComponentSpecification;

//     private   dirty_: boolean = false;
//     protected buffer_?: SnapshotBuffer< T >;

//     private fileID_?: number;
//     private fileIDProvider_?: () => number;

//     public get isReadonly(): boolean 
//     {
//         return this.fileIDProvider_ === undefined;
//     }

//     public get fileID(): number 
//     {
//         if ( this.fileID_ === undefined )
//         {
//             // We know the thunk to provide the number isn't null (by the construction properties, so thunk the file id to allocate it here)
//             // we only do this when asked
//             this.fileID_ = ( this.fileIDProvider_ as () => number )();
//         }

//         return this.fileID_;
//     }

//     protected markDirty(): void
//     {
//         if ( !this.dirty_ )
//         {
//             if ( this.dirtyProvider_ === undefined )
//             {
//                 throw new Error( 'Readonly object can not be modified' );
//             }

//             this.dirtyProvider_( this );
//         }

//         this.dirty_ = true;

//         // TODO - performance optimisation to make the dirty set in the transaction update if this  
//     }

//     public get dirty(): boolean
//     {
//         return this.dirty_;
//     }

//     constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
//     constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
//     constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
//     {
//         if ( typeof bufferOrFileIDProvider === 'function' )
//         {
//             // we've constructed this without a buffer
//             this.fileIDProvider_ = bufferOrFileIDProvider;
            
//             // we can't easily mark this dirty
//             this.markDirty();
//         }
//         else
//         {
//             let buffer = bufferOrFileIDProvider;

//             this.buffer_ = buffer;

//             // Note, we always read the ID
//             this.fileID_ = buffer.readUInt32LE( 0 );
//         }
//     };

//     public serializeRef( to: SmartBuffer, offset?: number ): void
//     {
//         to.writeUInt32LE( this.fileID, offset );
//     } 

//     public get isValid(): boolean 
//     {
//         // Overridable for validation.
//         return true;
//     } 

//     public abstract serialize( to: SmartBuffer ): void; 
// }