
import EntityComponentReference from "./entity_component_reference";
export default class Entity< K extends string | number >
{
    constructor( public readonly id : K, public readonly components : EntityComponentReference[], public readonly fileID : number | undefined ) {};
}