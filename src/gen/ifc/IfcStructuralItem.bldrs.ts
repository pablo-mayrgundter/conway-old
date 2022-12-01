
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralitem.htm
 */
export default class IfcStructuralItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralItem';

    public readonly __version__: number = 0;


}

export class IfcStructuralItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralItem';

    public readonly required: string[] = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
