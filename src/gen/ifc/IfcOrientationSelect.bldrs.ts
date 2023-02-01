
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorientationselect.htm
 */

export default class IfcOrientationSelect
{
    constructor( public readonly value: IfcOrientationSelectVariant ) {}
}

export type IfcOrientationSelectType = 'IfcPlaneAngleMeasure'|'IfcDirection';

export type IfcOrientationSelectChoices = IfcPlaneAngleMeasure|IfcDirection;

export type IfcOrientationSelectVariant = ({ type: 'IfcPlaneAngleMeasure'; value: IfcPlaneAngleMeasure }|{ type: 'IfcDirection'; value: IfcDirection }) & { type: IfcOrientationSelectType; value: IfcOrientationSelectChoices };

export function IfcOrientationSelectSerializer( value?: IfcOrientationSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
