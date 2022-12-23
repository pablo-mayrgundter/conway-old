
import Component from "../../core/components"
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
export default class IfcPropertyReferenceValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPropertyReferenceValue';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPropertyReferenceValueSpecification = IfcPropertyReferenceValueSpecification.instance;

    constructor( public readonly UsageName : IfcLabel  | undefined, public readonly PropertyReference : IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue  ) {}
}

export class IfcPropertyReferenceValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertyReferenceValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcSimpleProperty', 'IfcProperty' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UsageName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'PropertyReference',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertyReferenceValueSpecification = new IfcPropertyReferenceValueSpecification();
}
