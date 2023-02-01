
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectreferenceselect.htm
 */

export default class IfcObjectReferenceSelect
{
    constructor( public readonly value: IfcObjectReferenceSelectVariant ) {}
}

export type IfcObjectReferenceSelectType = 'IfcMaterial'|'IfcPerson'|'IfcDateAndTime'|'IfcMaterialList'|'IfcOrganization'|'IfcCalendarDate'|'IfcLocalTime'|'IfcPersonAndOrganization'|'IfcMaterialLayer'|'IfcExternalReference'|'IfcTimeSeries'|'IfcAddress'|'IfcAppliedValue';

export type IfcObjectReferenceSelectChoices = IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue;

export type IfcObjectReferenceSelectVariant = ({ type: 'IfcMaterial'; value: IfcMaterial }|{ type: 'IfcPerson'; value: IfcPerson }|{ type: 'IfcDateAndTime'; value: IfcDateAndTime }|{ type: 'IfcMaterialList'; value: IfcMaterialList }|{ type: 'IfcOrganization'; value: IfcOrganization }|{ type: 'IfcCalendarDate'; value: IfcCalendarDate }|{ type: 'IfcLocalTime'; value: IfcLocalTime }|{ type: 'IfcPersonAndOrganization'; value: IfcPersonAndOrganization }|{ type: 'IfcMaterialLayer'; value: IfcMaterialLayer }|{ type: 'IfcExternalReference'; value: IfcExternalReference }|{ type: 'IfcTimeSeries'; value: IfcTimeSeries }|{ type: 'IfcAddress'; value: IfcAddress }|{ type: 'IfcAppliedValue'; value: IfcAppliedValue }) & { type: IfcObjectReferenceSelectType; value: IfcObjectReferenceSelectChoices };

export function IfcObjectReferenceSelectSerializer( value?: IfcObjectReferenceSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
