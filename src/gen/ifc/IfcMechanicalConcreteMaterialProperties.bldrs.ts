
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalconcretematerialproperties.htm
 */
export default  class IfcMechanicalConcreteMaterialProperties extends IfcMechanicalMaterialProperties 
{    
    public readonly specification: IfcMechanicalConcreteMaterialPropertiesSpecification = IfcMechanicalConcreteMaterialPropertiesSpecification.instance;

private CompressiveStrength_? : IfcPressureMeasure
    private MaxAggregateSize_? : IfcPositiveLengthMeasure
    private AdmixturesDescription_? : IfcText
    private Workability_? : IfcText
    private ProtectivePoreRatio_? : IfcNormalisedRatioMeasure
    private WaterImpermeability_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMechanicalConcreteMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalConcreteMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcMechanicalConcreteMaterialProperties', 'IfcMechanicalMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CompressiveStrength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure',
			optional: true
		}, 
		{
			name: 'MaxAggregateSize',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'AdmixturesDescription',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'Workability',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'ProtectivePoreRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'WaterImpermeability',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMechanicalConcreteMaterialPropertiesSpecification = new IfcMechanicalConcreteMaterialPropertiesSpecification();
}
