
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIonConcentrationMeasure from "./IfcIonConcentrationMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPHMeasure from "./IfcPHMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwaterproperties.htm
 */
export default  class IfcWaterProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcWaterPropertiesSpecification = IfcWaterPropertiesSpecification.instance;

private IsPotable_? : boolean
    private Hardness_? : IfcIonConcentrationMeasure
    private AlkalinityConcentration_? : IfcIonConcentrationMeasure
    private AcidityConcentration_? : IfcIonConcentrationMeasure
    private ImpuritiesContent_? : IfcNormalisedRatioMeasure
    private PHLevel_? : IfcPHMeasure
    private DissolvedSolidsContent_? : IfcNormalisedRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcWaterPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWaterProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcWaterProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'IsPotable',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: true
		}, 
		{
			name: 'Hardness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIonConcentrationMeasure',
			optional: true
		}, 
		{
			name: 'AlkalinityConcentration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIonConcentrationMeasure',
			optional: true
		}, 
		{
			name: 'AcidityConcentration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIonConcentrationMeasure',
			optional: true
		}, 
		{
			name: 'ImpuritiesContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'PHLevel',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPHMeasure',
			optional: true
		}, 
		{
			name: 'DissolvedSolidsContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWaterPropertiesSpecification = new IfcWaterPropertiesSpecification();
}
