
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwallstandardcase.htm
 */
export default class IfcWallStandardCase implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWallStandardCase';

    public readonly __version__: number = 0;


}

export class IfcWallStandardCaseSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWallStandardCase';

    public readonly required: string[] = [ 'IfcWall', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
