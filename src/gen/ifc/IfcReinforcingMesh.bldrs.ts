
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmesh.htm
 */
export default  class IfcReinforcingMesh extends IfcReinforcingElement 
{    
    public readonly specification: IfcReinforcingMeshSpecification = IfcReinforcingMeshSpecification.instance;

private MeshLength_? : IfcPositiveLengthMeasure
    private MeshWidth_? : IfcPositiveLengthMeasure
    private LongitudinalBarNominalDiameter_? : IfcPositiveLengthMeasure
    private TransverseBarNominalDiameter_? : IfcPositiveLengthMeasure
    private LongitudinalBarCrossSectionArea_? : IfcAreaMeasure
    private TransverseBarCrossSectionArea_? : IfcAreaMeasure
    private LongitudinalBarSpacing_? : IfcPositiveLengthMeasure
    private TransverseBarSpacing_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcReinforcingMeshSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcingMesh';

    public readonly required: ReadonlyArray< string > = [ 'IfcReinforcingMesh', 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MeshLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'MeshWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'LongitudinalBarNominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'TransverseBarNominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'LongitudinalBarCrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: false
		}, 
		{
			name: 'TransverseBarCrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: false
		}, 
		{
			name: 'LongitudinalBarSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'TransverseBarSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcReinforcingMeshSpecification = new IfcReinforcingMeshSpecification();
}
