
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcTransportElementTypeEnum} from "./IfcTransportElementTypeEnum.bldrs"
import {IfcMassMeasure} from "./IfcMassMeasure.bldrs"
import {IfcCountMeasure} from "./IfcCountMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctransportelement.htm
 */
export default class IfcTransportElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTransportElement';

    public readonly __version__: number = 0;

	OperationType? : IfcTransportElementTypeEnum;
	CapacityByWeight? : IfcMassMeasure;
	CapacityByNumber? : IfcCountMeasure;

}

export class IfcTransportElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTransportElement';

    public readonly required: string[] = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTransportElementTypeEnum'
		}, 
		{
			name: 'CapacityByWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMassMeasure'
		}, 
		{
			name: 'CapacityByNumber',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure'
		}
    ];
}
