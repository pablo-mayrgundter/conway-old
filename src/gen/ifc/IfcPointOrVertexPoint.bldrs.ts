
import IfcPoint from "./IfcPoint.bldrs"
import IfcVertexPoint from "./IfcVertexPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointorvertexpoint.htm
 */

export default class IfcPointOrVertexPoint
{
    constructor( public readonly value: IfcPointOrVertexPointVariant ) {}
}

export type IfcPointOrVertexPointType = 'IfcPoint'|'IfcVertexPoint';

export type IfcPointOrVertexPointChoices = IfcPoint|IfcVertexPoint;

export type IfcPointOrVertexPointVariant = ({ type: 'IfcPoint'; value: IfcPoint }|{ type: 'IfcVertexPoint'; value: IfcVertexPoint }) & { type: IfcPointOrVertexPointType; value: IfcPointOrVertexPointChoices };

export function IfcPointOrVertexPointSerializer( value?: IfcPointOrVertexPoint, to: SmartBuffer, offset?: number )
{
    switch
    
}
