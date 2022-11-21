import Component from './component';
import ModelSpecification from './model_specification';
import {ComponentTypeNames} from './model_specification';
import Entity from './entity';

export type Components< K extends (string | number), T extends ModelSpecification > = { [ key in ComponentTypeNames< T > ]: Map< K, Component< T > > };

export interface Model< K extends (string | number), T extends ModelSpecification >
{
    specification : T;

    components : Components< K, T >;

    entities : ReadonlyMap< K, Entity< K, T > >; 
};
