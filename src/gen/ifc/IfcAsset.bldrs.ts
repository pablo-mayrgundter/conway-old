
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasset.htm
 */
export default  class IfcAsset extends IfcGroup 
{    
    public readonly specification: IfcAssetSpecification = IfcAssetSpecification.instance;

private AssetID_? : IfcIdentifier
    private OriginalValue_? : IfcCostValue
    private CurrentValue_? : IfcCostValue
    private TotalReplacementCost_? : IfcCostValue
    private Owner_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private User_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private ResponsiblePerson_? : IfcPerson
    private IncorporationDate_? : IfcCalendarDate
    private DepreciatedValue_? : IfcCostValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAssetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAsset';

    public readonly required: ReadonlyArray< string > = [ 'IfcAsset', 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AssetID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'OriginalValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue',
			optional: false
		}, 
		{
			name: 'CurrentValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue',
			optional: false
		}, 
		{
			name: 'TotalReplacementCost',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue',
			optional: false
		}, 
		{
			name: 'Owner',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: false
		}, 
		{
			name: 'User',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: false
		}, 
		{
			name: 'ResponsiblePerson',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPerson',
			optional: false
		}, 
		{
			name: 'IncorporationDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate',
			optional: false
		}, 
		{
			name: 'DepreciatedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAssetSpecification = new IfcAssetSpecification();
}
