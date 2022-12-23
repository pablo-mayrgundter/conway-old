import Entity from "./entity";
import Model, { Components } from "./model";
import SchemaSpecification from "./schema_specification";

export interface SnapshotReader< T extends SchemaSpecification >
{
    model: Model< T >;

    getBuffer( id: number ): SnapshotBuffer< T > | undefined;

    get( id: number ): Readonly< Entity< T > > | undefined;
    
    dirty( entity: Entity< T > ): void;

    release(): void;
    
    components : Components< T >;
}

// tslint:disable-next-line: no-any
type Constructor<T> = new (...args: any[]) => T;

export class SnapshotBuffer< T extends SchemaSpecification >
{
    constructor( private readonly buffer_: Buffer, public readonly snapshot: SnapshotReader< T > )
    {
        
    }

    public readEntity< EntityType extends Entity< T > >( classType: Constructor< EntityType >, offset?: number ) : Readonly< EntityType > | undefined 
    {
        let fileID = this.buffer_.readUint32LE( offset );

        if ( fileID === 0 )
        {
            return;
        }

        let result = this.snapshot.get( fileID );

        if ( result instanceof classType )
        {
            return result;
        }

        // Note, now we treat a dangling reference as a null reference.
        return;
    }

    public readBigUInt64LE(offset?: number): bigint { return this.buffer_.readBigUInt64LE( offset ); }

    public readBigInt64LE(offset?: number): bigint { return this.buffer_.readBigInt64LE( offset ); }
  
    public readUIntLE(offset: number, byteLength: number): number { return this.buffer_.readUIntLE( offset, byteLength ); }
  
    public readIntLE(offset: number, byteLength: number): number { return this.buffer_.readIntLE( offset, byteLength ); }

    public readUInt8(offset?: number): number { return this.buffer_.readUInt8( offset ); }
  
    public readUInt16LE(offset?: number): number { return this.buffer_.readUInt16LE( offset ); }

    public readUInt32LE(offset?: number): number { return this.buffer_.readUInt32LE( offset ); }

    public readInt8(offset?: number): number { return this.buffer_.readInt8( offset ); }

    public readInt16LE(offset?: number): number { return this.buffer_.readInt16LE( offset ); }
  
    public readInt32LE(offset?: number): number { return this.buffer_.readInt32LE( offset ); }
 
    public readFloatLE(offset?: number): number { return this.buffer_.readFloatLE( offset ); }

    public readDoubleLE(offset?: number): number { return this.buffer_.readDoubleLE( offset ); }

    public toString(encoding?: BufferEncoding, start?: number, end?: number): string { return this.buffer_.toString( encoding, start, end ); }

    get length() : number
    {
        return this.buffer_.length;
    }
}

export default abstract class Snapshot< T extends SchemaSpecification > implements SnapshotReader< T >
{
    public abstract readonly commitID: number;

    public abstract readonly model: Model< T >;

    private cache_?: Map< number, Entity< T > >; 

    private get cache(): Map< number, Entity< T > >
    {
        if ( this.cache_ == null )
        {
            this.cache_ = new Map< number, Entity< T > >();
        }

        return this.cache_;
    }

    public abstract getBuffer( id: number ) : SnapshotBuffer< T > | undefined;

    public get( id: number ): Readonly< Entity< T > > | undefined
    {
        let result = this.cache_?.get( id );

        if ( result == null )
        {
            let buffer = this.getBuffer( id );

            if ( buffer == null )
            {
                return;
            }

            result = this.model.createFromBuffer( buffer );

            this.cache.set( id, result );
        }

        return result;
    }

    public dirty( entity: Entity< T > ): void
    {
        throw Error( "Dirty is not implemented for Snapshots, which are read only" );
    }

    public abstract release(): void;
}