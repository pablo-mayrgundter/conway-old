
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastenertype.htm
 */
export default class IfcMechanicalFastenerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMechanicalFastenerType';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcMechanicalFastenerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalFastenerType';

    public readonly required: string[] = [ 'IfcFastenerType', 'IfcElementComponentType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
