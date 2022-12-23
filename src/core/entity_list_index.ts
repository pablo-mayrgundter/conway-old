import Entity, { EntitySchema } from "./entity";
import { SnapshotReader } from "./snapshot";
import Transaction from "./transaction";

export default class EntityListIndex< T extends Entity< any > >
{
    private readonly addresses_: Map< number, number | null >

    public *values( snapshort: SnapshotReader< T > ): IterableIterator< T >
    {

    }

    public get length(): number
    {
        
    }
}