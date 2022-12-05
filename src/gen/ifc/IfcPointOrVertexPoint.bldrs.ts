
import IfcPoint from "./IfcPoint.bldrs"
import IfcVertexPoint from "./IfcVertexPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointorvertexpoint.htm
 */

export default class IfcPointOrVertexPoint
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcPointOrVertexPointVariant ) {}
}

export type IfcPointOrVertexPointType = 'IfcPoint'|'IfcVertexPoint';

export type IfcPointOrVertexPointChoices = IfcPoint|IfcVertexPoint;

export type IfcPointOrVertexPointVariant = ({ type: 'IfcPoint'; value: IfcPoint }|{ type: 'IfcVertexPoint'; value: IfcVertexPoint }) & { type: IfcPointOrVertexPointType; value: IfcPointOrVertexPointChoices };

