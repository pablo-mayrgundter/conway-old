
import IfcExternalReference from "./IfcExternalReference.bldrs"
import IfcLightIntensityDistribution from "./IfcLightIntensityDistribution.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightdistributiondatasourceselect.htm
 */

export default class IfcLightDistributionDataSourceSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcLightDistributionDataSourceSelectVariant ) {}
}

export type IfcLightDistributionDataSourceSelectType = 'IfcExternalReference'|'IfcLightIntensityDistribution';

export type IfcLightDistributionDataSourceSelectChoices = IfcExternalReference|IfcLightIntensityDistribution;

export type IfcLightDistributionDataSourceSelectVariant = ({ type: 'IfcExternalReference'; value: IfcExternalReference }|{ type: 'IfcLightIntensityDistribution'; value: IfcLightIntensityDistribution }) & { type: IfcLightDistributionDataSourceSelectType; value: IfcLightDistributionDataSourceSelectChoices };

