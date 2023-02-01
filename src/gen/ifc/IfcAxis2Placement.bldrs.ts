
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement.htm
 */

export default class IfcAxis2Placement
{
    constructor( public readonly value: IfcAxis2PlacementVariant ) {}
}

export type IfcAxis2PlacementType = 'IfcAxis2Placement2D'|'IfcAxis2Placement3D';

export type IfcAxis2PlacementChoices = IfcAxis2Placement2D|IfcAxis2Placement3D;

export type IfcAxis2PlacementVariant = ({ type: 'IfcAxis2Placement2D'; value: IfcAxis2Placement2D }|{ type: 'IfcAxis2Placement3D'; value: IfcAxis2Placement3D }) & { type: IfcAxis2PlacementType; value: IfcAxis2PlacementChoices };

export function IfcAxis2PlacementSerializer( value?: IfcAxis2Placement, to: SmartBuffer, offset?: number )
{
    switch
    
}
