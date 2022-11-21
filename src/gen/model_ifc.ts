import Entity from "../core/entity";
import { Components, Model } from "../core/model";
import ModelSpecification from "../core/model_specification";
import { IfcElement } from "./IfcElement";
import { IfcWall } from "./IfcWall";

type ComponentTypeNamesIFC = 'IfcWall' | 'IfcElement';
type IfcEntityKeyType      = string; // String, because IFC uses GUIDs

export default class ModelIfc implements Model< IfcEntityKeyType, ModelIfcSpecification >
{
    public readonly specification: ModelIfcSpecification = new ModelIfcSpecification();

    public readonly components = new IfcComponents;

    public readonly entities = new Map< IfcEntityKeyType, Entity< IfcEntityKeyType, ModelIfcSpecification > >();
}

export class ModelIfcSpecification implements ModelSpecification
{
    public components : ComponentTypeNamesIFC[] = [ 'IfcWall', 'IfcElement' ];
}

export class IfcComponents implements Components< IfcEntityKeyType, ModelIfcSpecification >
{
    public readonly IfcWall = new Map< IfcEntityKeyType, IfcWall >();

    public readonly IfcElement = new Map< IfcEntityKeyType, IfcElement >();
}
