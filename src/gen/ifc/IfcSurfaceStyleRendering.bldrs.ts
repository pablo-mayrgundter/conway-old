
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcSpecularExponent from "./IfcSpecularExponent.bldrs"
import IfcSpecularRoughness from "./IfcSpecularRoughness.bldrs"
import IfcReflectanceMethodEnum from "./IfcReflectanceMethodEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerendering.htm
 */
export default class IfcSurfaceStyleRendering implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceStyleRendering';

    public readonly __version__: number = 0;

    constructor( public readonly Transparency : IfcNormalisedRatioMeasure  | undefined, public readonly DiffuseColour : IfcColourRgb|IfcNormalisedRatioMeasure  | undefined, public readonly TransmissionColour : IfcColourRgb|IfcNormalisedRatioMeasure  | undefined, public readonly DiffuseTransmissionColour : IfcColourRgb|IfcNormalisedRatioMeasure  | undefined, public readonly ReflectionColour : IfcColourRgb|IfcNormalisedRatioMeasure  | undefined, public readonly SpecularColour : IfcColourRgb|IfcNormalisedRatioMeasure  | undefined, public readonly SpecularHighlight : IfcSpecularExponent|IfcSpecularRoughness  | undefined, public readonly ReflectanceMethod : IfcReflectanceMethodEnum  ) {}
}

export class IfcSurfaceStyleRenderingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleRendering';

    public readonly required: string[] = [ 'IfcSurfaceStyleShading' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Transparency',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'DiffuseColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'TransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'DiffuseTransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'ReflectionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'SpecularColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'SpecularHighlight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpecularExponent|IfcSpecularRoughness'
		}, 
		{
			name: 'ReflectanceMethod',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReflectanceMethodEnum'
		}
    ];
}
