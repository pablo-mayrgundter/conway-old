
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementpart.htm
 */
export default class IfcBuildingElementPart implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingElementPart';

    public readonly __version__: number = 0;


}

export class IfcBuildingElementPartSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElementPart';

    public readonly required: string[] = [ 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
