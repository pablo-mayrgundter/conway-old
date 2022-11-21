
import ModelSpecification from "./model_specification";
import { ComponentTypeNames } from "./model_specification";

export default class Entity< K extends string | number, T extends ModelSpecification >
{
    constructor( public readonly key : K, public readonly components : ComponentTypeNames< T >[] ) {};
}