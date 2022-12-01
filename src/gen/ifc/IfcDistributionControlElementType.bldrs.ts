
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelementtype.htm
 */
export default class IfcDistributionControlElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionControlElementType';

    public readonly __version__: number = 0;


}

export class IfcDistributionControlElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionControlElementType';

    public readonly required: string[] = [ 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
