import Component from "../core/component";
import { ModelIfcSpecification } from "./model_ifc";

export interface IfcElement extends Component< ModelIfcSpecification >
{
    __type__ : 'IfcElement';
}