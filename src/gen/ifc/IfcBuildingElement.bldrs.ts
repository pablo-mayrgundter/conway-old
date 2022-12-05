
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelement.htm
 */
export default class IfcBuildingElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingElement';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcBuildingElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElement';

    public readonly required: string[] = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
