
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfastenertype.htm
 */
export default class IfcFastenerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFastenerType';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcFastenerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFastenerType';

    public readonly required: string[] = [ 'IfcElementComponentType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
