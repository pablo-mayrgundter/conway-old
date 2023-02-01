
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrimmingselect.htm
 */

export default class IfcTrimmingSelect
{
    constructor( public readonly value: IfcTrimmingSelectVariant ) {}
}

export type IfcTrimmingSelectType = 'IfcCartesianPoint'|'IfcParameterValue';

export type IfcTrimmingSelectChoices = IfcCartesianPoint|IfcParameterValue;

export type IfcTrimmingSelectVariant = ({ type: 'IfcCartesianPoint'; value: IfcCartesianPoint }|{ type: 'IfcParameterValue'; value: IfcParameterValue }) & { type: IfcTrimmingSelectType; value: IfcTrimmingSelectChoices };

export function IfcTrimmingSelectSerializer( value?: IfcTrimmingSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
