
import IfcPoint from "./IfcPoint.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcSurface from "./IfcSurface.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricsetselect.htm
 */

export default class IfcGeometricSetSelect
{
    constructor( public readonly value: IfcGeometricSetSelectVariant ) {}
}

export type IfcGeometricSetSelectType = 'IfcPoint'|'IfcCurve'|'IfcSurface';

export type IfcGeometricSetSelectChoices = IfcPoint|IfcCurve|IfcSurface;

export type IfcGeometricSetSelectVariant = ({ type: 'IfcPoint'; value: IfcPoint }|{ type: 'IfcCurve'; value: IfcCurve }|{ type: 'IfcSurface'; value: IfcSurface }) & { type: IfcGeometricSetSelectType; value: IfcGeometricSetSelectChoices };

export function IfcGeometricSetSelectSerializer( value?: IfcGeometricSetSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
