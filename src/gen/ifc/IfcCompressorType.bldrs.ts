
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCompressorTypeEnum} from "./IfcCompressorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompressortype.htm
 */
export default class IfcCompressorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCompressorType';

    public readonly __version__: number = 0;

	PredefinedType : IfcCompressorTypeEnum;

}

export class IfcCompressorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompressorType';

    public readonly required: string[] = [ 'IfcFlowMovingDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCompressorTypeEnum'
		}
    ];
}
