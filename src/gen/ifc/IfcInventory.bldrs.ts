
import Component from "../../core/components"
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
export default class IfcInventory implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcInventory';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcInventorySpecification = IfcInventorySpecification.instance;

    constructor( public readonly InventoryType : IfcInventoryTypeEnum , public readonly Jurisdiction : IfcOrganization|IfcPerson|IfcPersonAndOrganization , public readonly ResponsiblePersons : Array<IfcPerson> , public readonly LastUpdateDate : IfcCalendarDate , public readonly CurrentValue : IfcCostValue  | undefined, public readonly OriginalValue : IfcCostValue  | undefined ) {}
}

export class IfcInventorySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcInventory';

    public readonly required: ReadonlyArray< string > = [ 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InventoryType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInventoryTypeEnum'
		}, 
		{
			name: 'Jurisdiction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'ResponsiblePersons',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPerson>'
		}, 
		{
			name: 'LastUpdateDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate'
		}, 
		{
			name: 'CurrentValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue'
		}, 
		{
			name: 'OriginalValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostValue'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcInventorySpecification = new IfcInventorySpecification();
}
