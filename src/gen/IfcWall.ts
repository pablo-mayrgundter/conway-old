import Component from "../core/component";
import { ModelIfcSpecification } from "./model_ifc";

export interface IfcWall extends Component< ModelIfcSpecification >
{
    __type__ : 'IfcWall';
}