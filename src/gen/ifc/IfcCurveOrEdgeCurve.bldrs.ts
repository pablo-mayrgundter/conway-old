
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"
import IfcEdgeCurve from "./IfcEdgeCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveoredgecurve.htm
 */

export default class IfcCurveOrEdgeCurve
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcCurveOrEdgeCurveVariant ) {}
}

export type IfcCurveOrEdgeCurveType = 'IfcBoundedCurve'|'IfcEdgeCurve';

export type IfcCurveOrEdgeCurveChoices = IfcBoundedCurve|IfcEdgeCurve;

export type IfcCurveOrEdgeCurveVariant = ({ type: 'IfcBoundedCurve'; value: IfcBoundedCurve }|{ type: 'IfcEdgeCurve'; value: IfcEdgeCurve }) & { type: IfcCurveOrEdgeCurveType; value: IfcCurveOrEdgeCurveChoices };
