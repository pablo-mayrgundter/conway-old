
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementtype.htm
 */
export default class IfcBuildingElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingElementType';

    public readonly __version__: number = 0;


}

export class IfcBuildingElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElementType';

    public readonly required: string[] = [ 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
