
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcLuminousFluxMeasure from "./IfcLuminousFluxMeasure.bldrs"
import IfcLightEmissionSourceEnum from "./IfcLightEmissionSourceEnum.bldrs"
import IfcExternalReference from "./IfcExternalReference.bldrs"
import IfcLightIntensityDistribution from "./IfcLightIntensityDistribution.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcegoniometric.htm
 */
export default class IfcLightSourceGoniometric implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightSourceGoniometric';

    public readonly __version__: number = 0;

    constructor( public readonly Position : IfcAxis2Placement3D , public readonly ColourAppearance : IfcColourRgb  | undefined, public readonly ColourTemperature : IfcThermodynamicTemperatureMeasure , public readonly LuminousFlux : IfcLuminousFluxMeasure , public readonly LightEmissionSource : IfcLightEmissionSourceEnum , public readonly LightDistributionDataSource : IfcExternalReference|IfcLightIntensityDistribution  ) {}
}

export class IfcLightSourceGoniometricSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourceGoniometric';

    public readonly required: string[] = [ 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}, 
		{
			name: 'ColourAppearance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb'
		}, 
		{
			name: 'ColourTemperature',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure'
		}, 
		{
			name: 'LuminousFlux',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLuminousFluxMeasure'
		}, 
		{
			name: 'LightEmissionSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLightEmissionSourceEnum'
		}, 
		{
			name: 'LightDistributionDataSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcExternalReference|IfcLightIntensityDistribution'
		}
    ];
}
