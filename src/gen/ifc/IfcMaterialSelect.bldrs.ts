
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcMaterialList from "./IfcMaterialList.bldrs"
import IfcMaterialLayerSetUsage from "./IfcMaterialLayerSetUsage.bldrs"
import IfcMaterialLayerSet from "./IfcMaterialLayerSet.bldrs"
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialselect.htm
 */

export default class IfcMaterialSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcMaterialSelectVariant ) {}
}

export type IfcMaterialSelectType = 'IfcMaterial'|'IfcMaterialList'|'IfcMaterialLayerSetUsage'|'IfcMaterialLayerSet'|'IfcMaterialLayer';

export type IfcMaterialSelectChoices = IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer;

export type IfcMaterialSelectVariant = ({ type: 'IfcMaterial'; value: IfcMaterial }|{ type: 'IfcMaterialList'; value: IfcMaterialList }|{ type: 'IfcMaterialLayerSetUsage'; value: IfcMaterialLayerSetUsage }|{ type: 'IfcMaterialLayerSet'; value: IfcMaterialLayerSet }|{ type: 'IfcMaterialLayer'; value: IfcMaterialLayer }) & { type: IfcMaterialSelectType; value: IfcMaterialSelectChoices };

