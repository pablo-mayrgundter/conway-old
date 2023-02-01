
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpecificHeatCapacityMeasure from "./IfcSpecificHeatCapacityMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductsofcombustionproperties.htm
 */
export default  class IfcProductsOfCombustionProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcProductsOfCombustionPropertiesSpecification = IfcProductsOfCombustionPropertiesSpecification.instance;

private SpecificHeatCapacity_? : IfcSpecificHeatCapacityMeasure
    private N20Content_? : IfcPositiveRatioMeasure
    private COContent_? : IfcPositiveRatioMeasure
    private CO2Content_? : IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProductsOfCombustionPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProductsOfCombustionProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcProductsOfCombustionProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SpecificHeatCapacity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpecificHeatCapacityMeasure',
			optional: true
		}, 
		{
			name: 'N20Content',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'COContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'CO2Content',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProductsOfCombustionPropertiesSpecification = new IfcProductsOfCombustionPropertiesSpecification();
}
