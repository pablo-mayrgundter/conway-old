
import IfcSurface from "./IfcSurface.bldrs"
import IfcFaceSurface from "./IfcFaceSurface.bldrs"
import IfcFaceBasedSurfaceModel from "./IfcFaceBasedSurfaceModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceorfacesurface.htm
 */

export default class IfcSurfaceOrFaceSurface
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcSurfaceOrFaceSurfaceVariant ) {}
}

export type IfcSurfaceOrFaceSurfaceType = 'IfcSurface'|'IfcFaceSurface'|'IfcFaceBasedSurfaceModel';

export type IfcSurfaceOrFaceSurfaceChoices = IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel;

export type IfcSurfaceOrFaceSurfaceVariant = ({ type: 'IfcSurface'; value: IfcSurface }|{ type: 'IfcFaceSurface'; value: IfcFaceSurface }|{ type: 'IfcFaceBasedSurfaceModel'; value: IfcFaceBasedSurfaceModel }) & { type: IfcSurfaceOrFaceSurfaceType; value: IfcSurfaceOrFaceSurfaceChoices };

