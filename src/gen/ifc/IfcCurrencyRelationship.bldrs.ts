
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcLibraryInformation from "./IfcLibraryInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurrencyrelationship.htm
 */
export default class IfcCurrencyRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurrencyRelationship';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingMonetaryUnit : IfcMonetaryUnit , public readonly RelatedMonetaryUnit : IfcMonetaryUnit , public readonly ExchangeRate : IfcPositiveRatioMeasure , public readonly RateDateTime : IfcDateAndTime , public readonly RateSource : IfcLibraryInformation  | undefined ) {}
}

export class IfcCurrencyRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurrencyRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingMonetaryUnit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMonetaryUnit'
		}, 
		{
			name: 'RelatedMonetaryUnit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMonetaryUnit'
		}, 
		{
			name: 'ExchangeRate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'RateDateTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDateAndTime'
		}, 
		{
			name: 'RateSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLibraryInformation'
		}
    ];
}
