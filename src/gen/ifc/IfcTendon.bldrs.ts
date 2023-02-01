
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTendonTypeEnum from "./IfcTendonTypeEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcForceMeasure from "./IfcForceMeasure.bldrs"
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendon.htm
 */
export default  class IfcTendon extends IfcReinforcingElement 
{    
    public readonly specification: IfcTendonSpecification = IfcTendonSpecification.instance;

private PredefinedType_? : IfcTendonTypeEnum
    private NominalDiameter_? : IfcPositiveLengthMeasure
    private CrossSectionArea_? : IfcAreaMeasure
    private TensionForce_? : IfcForceMeasure
    private PreStress_? : IfcPressureMeasure
    private FrictionCoefficient_? : IfcNormalisedRatioMeasure
    private AnchorageSlip_? : IfcPositiveLengthMeasure
    private MinCurvatureRadius_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTendonSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTendon';

    public readonly required: ReadonlyArray< string > = [ 'IfcTendon', 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTendonTypeEnum',
			optional: false
		}, 
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'CrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: false
		}, 
		{
			name: 'TensionForce',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'PreStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure',
			optional: true
		}, 
		{
			name: 'FrictionCoefficient',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'AnchorageSlip',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'MinCurvatureRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTendonSpecification = new IfcTendonSpecification();
}
