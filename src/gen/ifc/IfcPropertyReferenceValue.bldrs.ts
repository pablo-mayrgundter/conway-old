
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcMaterialList from "./IfcMaterialList.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"
import IfcExternalReference from "./IfcExternalReference.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcAddress from "./IfcAddress.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyreferencevalue.htm
 */
export default  class IfcPropertyReferenceValue extends IfcSimpleProperty 
{    
    public readonly specification: IfcPropertyReferenceValueSpecification = IfcPropertyReferenceValueSpecification.instance;

private UsageName_? : IfcLabel
    private PropertyReference_? : IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPropertyReferenceValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertyReferenceValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertyReferenceValue', 'IfcSimpleProperty', 'IfcProperty' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UsageName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'PropertyReference',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertyReferenceValueSpecification = new IfcPropertyReferenceValueSpecification();
}
