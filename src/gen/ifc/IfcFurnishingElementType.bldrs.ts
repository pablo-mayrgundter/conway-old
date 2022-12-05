
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfurnishingelementtype.htm
 */
export default class IfcFurnishingElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFurnishingElementType';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcFurnishingElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFurnishingElementType';

    public readonly required: string[] = [ 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
