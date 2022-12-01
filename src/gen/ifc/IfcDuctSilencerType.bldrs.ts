
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDuctSilencerTypeEnum} from "./IfcDuctSilencerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcductsilencertype.htm
 */
export default class IfcDuctSilencerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDuctSilencerType';

    public readonly __version__: number = 0;

	PredefinedType : IfcDuctSilencerTypeEnum;

}

export class IfcDuctSilencerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDuctSilencerType';

    public readonly required: string[] = [ 'IfcFlowTreatmentDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDuctSilencerTypeEnum'
		}
    ];
}
