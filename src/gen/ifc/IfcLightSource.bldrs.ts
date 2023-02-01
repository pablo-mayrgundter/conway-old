
import Component from "../../core/component"
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
export default abstract class IfcLightSource extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcLightSourceSpecification = IfcLightSourceSpecification.instance;

private Name_? : IfcLabel
    private LightColour_? : IfcColourRgb
    private AmbientIntensity_? : IfcNormalisedRatioMeasure
    private Intensity_? : IfcNormalisedRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLightSourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSource';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'LightColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb',
			optional: false
		}, 
		{
			name: 'AmbientIntensity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'Intensity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightSourceSpecification = new IfcLightSourceSpecification();
}
