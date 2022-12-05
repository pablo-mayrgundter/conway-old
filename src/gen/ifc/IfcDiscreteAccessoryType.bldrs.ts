
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdiscreteaccessorytype.htm
 */
export default class IfcDiscreteAccessoryType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDiscreteAccessoryType';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcDiscreteAccessoryTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDiscreteAccessoryType';

    public readonly required: string[] = [ 'IfcElementComponentType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
