
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsystemfurnitureelementtype.htm
 */
export default class IfcSystemFurnitureElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSystemFurnitureElementType';

    public readonly __version__: number = 0;


}

export class IfcSystemFurnitureElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSystemFurnitureElementType';

    public readonly required: string[] = [ 'IfcFurnishingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
