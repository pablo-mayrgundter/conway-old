
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcInventoryTypeEnum from "./IfcInventoryTypeEnum.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinventory.htm
 */
export default  class IfcInventory extends IfcGroup 
{    
    public readonly specification: IfcInventorySpecification = IfcInventorySpecification.instance;

private InventoryType_? : IfcInventoryTypeEnum
    private Jurisdiction_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private ResponsiblePersons_? : Array<IfcPerson>
    private LastUpdateDate_? : IfcCalendarDate
    private CurrentValue_? : IfcCostValue
    private OriginalValue_? : IfcCostValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcInventorySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcInventory';

    public readonly required: ReadonlyArray< string > = [ 'IfcInventory', 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InventoryType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInventoryTypeEnum',
			optional: false
		}, 
		{
			name: 'Jurisdiction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: false
		}, 
		{
			name: 'ResponsiblePersons',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPerson>',
			optional: false
		}, 
		{
			name: 'LastUpdateDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate',
			optional: false
		}, 
		{
			name: 'CurrentValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue',
			optional: true
		}, 
		{
			name: 'OriginalValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcInventorySpecification = new IfcInventorySpecification();
}
