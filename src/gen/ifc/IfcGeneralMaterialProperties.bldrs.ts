
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMolecularWeightMeasure from "./IfcMolecularWeightMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcMassDensityMeasure from "./IfcMassDensityMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeneralmaterialproperties.htm
 */
export default  class IfcGeneralMaterialProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcGeneralMaterialPropertiesSpecification = IfcGeneralMaterialPropertiesSpecification.instance;

private MolecularWeight_? : IfcMolecularWeightMeasure
    private Porosity_? : IfcNormalisedRatioMeasure
    private MassDensity_? : IfcMassDensityMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGeneralMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeneralMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeneralMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MolecularWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMolecularWeightMeasure',
			optional: true
		}, 
		{
			name: 'Porosity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'MassDensity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMassDensityMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeneralMaterialPropertiesSpecification = new IfcGeneralMaterialPropertiesSpecification();
}
