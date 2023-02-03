// import SchemaSpecification from './schema_specification';
// import {ComponentTypeNames} from './schema_specification';
// import Entity from './entity';
// import ComponentSet from './component_set';
// import Snapshot, { SnapshotBuffer } from './snapshot';
// import Transaction from './transaction';

// export type Components< T extends SchemaSpecification > = { [ key in ComponentTypeNames< T > ]: ComponentSet< key, T > };

// export default interface Model< T extends SchemaSpecification >
// {
//     id : string;

//     latest(): Snapshot< T >;

//     createTransaction(): Transaction< T >;

//     createFromBuffer( buffer: SnapshotBuffer< T > ): Entity< T >;

//     lastCommitID: number;

//     maxSeenId?: number;

//     entities : ReadonlyMap< number, Entity< T > >; 
// };
