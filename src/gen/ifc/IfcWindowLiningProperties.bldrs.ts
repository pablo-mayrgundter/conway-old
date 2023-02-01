
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowliningproperties.htm
 */
export default  class IfcWindowLiningProperties extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcWindowLiningPropertiesSpecification = IfcWindowLiningPropertiesSpecification.instance;

private LiningDepth_? : IfcPositiveLengthMeasure
    private LiningThickness_? : IfcPositiveLengthMeasure
    private TransomThickness_? : IfcPositiveLengthMeasure
    private MullionThickness_? : IfcPositiveLengthMeasure
    private FirstTransomOffset_? : IfcNormalisedRatioMeasure
    private SecondTransomOffset_? : IfcNormalisedRatioMeasure
    private FirstMullionOffset_? : IfcNormalisedRatioMeasure
    private SecondMullionOffset_? : IfcNormalisedRatioMeasure
    private ShapeAspectStyle_? : IfcShapeAspect

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcWindowLiningPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindowLiningProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcWindowLiningProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LiningDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'LiningThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'TransomThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'MullionThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'FirstTransomOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'SecondTransomOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'FirstMullionOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'SecondMullionOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'ShapeAspectStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWindowLiningPropertiesSpecification = new IfcWindowLiningPropertiesSpecification();
}
