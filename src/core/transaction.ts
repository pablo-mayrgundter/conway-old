import Entity from "./entity";
import { Model } from "./model";
import SchemaSpecification from "./schema_specification";
import Snapshot, { SnapshotBuffer, SnapshotReader } from "./snapshot";

const DEFAULT_TX_BUFFER_SIZE = 32;

export default class Transaction< T extends SchemaSpecification > implements SnapshotReader< T >
{
    private readonly dirty_ = new Set< number >();

    private snapshot_?: Snapshot< T >;
    private cache_?: Map< number, Entity< T > >; 

    private get cache(): Map< number, Entity< T > >
    {
        if ( this.cache_ == null )
        {
            this.cache_ = new Map< number, Entity< T > >();
        }

        return this.cache_;
    }

    constructor( public readonly model: Model< T > )
    {
        this.snapshot_ = model.latest();
    }

    public commit(): void 
    {
        if ( this.snapshot_ == null )
        {
            throw new ReferenceError( "Snapshot already released" ); 
        }
    }

    public rollback(): void 
    {
        this.release();
    }

    public release(): void
    {
        if ( this.snapshot_ != null )
        {
            this.snapshot_.release();
            
            delete this.snapshot_;
            delete this.cache_;
        }
    }

    public getBuffer( id: number ): SnapshotBuffer< T > | undefined 
    {
        if ( this.snapshot_ == null )
        {
            throw new Error( "Can't get buffer for item in transaction, ")
        }

        return this.snapshot_.getBuffer( id );
    }

    public get( id: number ):  Readonly< Entity< T > > | undefined
    {
        if ( this.snapshot_ == null )
        {
            throw new ReferenceError( "Snapshot already released" ); 
        }

        let result = this.cache_?.get( id );

        if ( result == null )
        {
            let buffer = this.snapshot_.getBuffer( id );

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
        this.dirty_.add( entity.fileID );
    }
}