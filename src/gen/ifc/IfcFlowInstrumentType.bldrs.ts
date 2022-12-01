
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcFlowInstrumentTypeEnum} from "./IfcFlowInstrumentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowinstrumenttype.htm
 */
export default class IfcFlowInstrumentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowInstrumentType';

    public readonly __version__: number = 0;

	PredefinedType : IfcFlowInstrumentTypeEnum;

}

export class IfcFlowInstrumentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowInstrumentType';

    public readonly required: string[] = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowInstrumentTypeEnum'
		}
    ];
}
