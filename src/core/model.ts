import Component from './component';
import SchemaSpecification from './schema_specification';
import {ComponentTypeNames} from './schema_specification';
import Entity from './entity';

export type Components< K extends (string | number), T extends SchemaSpecification > = { [ key in ComponentTypeNames< T > ]: Map< K, Component< T > > };

export interface Model< K extends (string | number) >
{
    id : K;

    maxSeenFileId?: number;

    components : Components< K, T >;

    entities : ReadonlyMap< K, Entity< K, T > >; 

    schemas: SchemaSpecification[];
};
