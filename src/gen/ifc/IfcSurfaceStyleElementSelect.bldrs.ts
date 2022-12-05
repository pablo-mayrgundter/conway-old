
import IfcSurfaceStyleShading from "./IfcSurfaceStyleShading.bldrs"
import IfcSurfaceStyleLighting from "./IfcSurfaceStyleLighting.bldrs"
import IfcSurfaceStyleWithTextures from "./IfcSurfaceStyleWithTextures.bldrs"
import IfcExternallyDefinedSurfaceStyle from "./IfcExternallyDefinedSurfaceStyle.bldrs"
import IfcSurfaceStyleRefraction from "./IfcSurfaceStyleRefraction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyleelementselect.htm
 */

export default class IfcSurfaceStyleElementSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcSurfaceStyleElementSelectVariant ) {}
}

export type IfcSurfaceStyleElementSelectType = 'IfcSurfaceStyleShading'|'IfcSurfaceStyleLighting'|'IfcSurfaceStyleWithTextures'|'IfcExternallyDefinedSurfaceStyle'|'IfcSurfaceStyleRefraction';

export type IfcSurfaceStyleElementSelectChoices = IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction;

export type IfcSurfaceStyleElementSelectVariant = ({ type: 'IfcSurfaceStyleShading'; value: IfcSurfaceStyleShading }|{ type: 'IfcSurfaceStyleLighting'; value: IfcSurfaceStyleLighting }|{ type: 'IfcSurfaceStyleWithTextures'; value: IfcSurfaceStyleWithTextures }|{ type: 'IfcExternallyDefinedSurfaceStyle'; value: IfcExternallyDefinedSurfaceStyle }|{ type: 'IfcSurfaceStyleRefraction'; value: IfcSurfaceStyleRefraction }) & { type: IfcSurfaceStyleElementSelectType; value: IfcSurfaceStyleElementSelectChoices };

