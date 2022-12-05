
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasset.htm
 */
export default class IfcAsset implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAsset';

    public readonly __version__: number = 0;

    constructor( public readonly AssetID : IfcIdentifier , public readonly OriginalValue : IfcCostValue , public readonly CurrentValue : IfcCostValue , public readonly TotalReplacementCost : IfcCostValue , public readonly Owner : IfcOrganization|IfcPerson|IfcPersonAndOrganization , public readonly User : IfcOrganization|IfcPerson|IfcPersonAndOrganization , public readonly ResponsiblePerson : IfcPerson , public readonly IncorporationDate : IfcCalendarDate , public readonly DepreciatedValue : IfcCostValue  ) {}
}

export class IfcAssetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAsset';

    public readonly required: string[] = [ 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'AssetID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'OriginalValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue'
		}, 
		{
			name: 'CurrentValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue'
		}, 
		{
			name: 'TotalReplacementCost',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue'
		}, 
		{
			name: 'Owner',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'User',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'ResponsiblePerson',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPerson'
		}, 
		{
			name: 'IncorporationDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate'
		}, 
		{
			name: 'DepreciatedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue'
		}
    ];
}
