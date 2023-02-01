
import IfcBooleanResult from "./IfcBooleanResult.bldrs"
import IfcCsgPrimitive3D from "./IfcCsgPrimitive3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgselect.htm
 */

export default class IfcCsgSelect
{
    constructor( public readonly value: IfcCsgSelectVariant ) {}
}

export type IfcCsgSelectType = 'IfcBooleanResult'|'IfcCsgPrimitive3D';

export type IfcCsgSelectChoices = IfcBooleanResult|IfcCsgPrimitive3D;

export type IfcCsgSelectVariant = ({ type: 'IfcBooleanResult'; value: IfcBooleanResult }|{ type: 'IfcCsgPrimitive3D'; value: IfcCsgPrimitive3D }) & { type: IfcCsgSelectType; value: IfcCsgSelectChoices };

export function IfcCsgSelectSerializer( value?: IfcCsgSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
