
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsource.htm
 */
export default class IfcLightSource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightSource';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcLightSourceSpecification = IfcLightSourceSpecification.instance;

    constructor( public readonly Name : IfcLabel  | undefined, public readonly LightColour : IfcColourRgb , public readonly AmbientIntensity : IfcNormalisedRatioMeasure  | undefined, public readonly Intensity : IfcNormalisedRatioMeasure  | undefined ) {}
}

export class IfcLightSourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSource';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'LightColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb'
		}, 
		{
			name: 'AmbientIntensity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'Intensity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightSourceSpecification = new IfcLightSourceSpecification();
}
