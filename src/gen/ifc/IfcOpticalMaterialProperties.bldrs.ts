
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcopticalmaterialproperties.htm
 */
export default  class IfcOpticalMaterialProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcOpticalMaterialPropertiesSpecification = IfcOpticalMaterialPropertiesSpecification.instance;

private VisibleTransmittance_? : IfcPositiveRatioMeasure
    private SolarTransmittance_? : IfcPositiveRatioMeasure
    private ThermalIrTransmittance_? : IfcPositiveRatioMeasure
    private ThermalIrEmissivityBack_? : IfcPositiveRatioMeasure
    private ThermalIrEmissivityFront_? : IfcPositiveRatioMeasure
    private VisibleReflectanceBack_? : IfcPositiveRatioMeasure
    private VisibleReflectanceFront_? : IfcPositiveRatioMeasure
    private SolarReflectanceFront_? : IfcPositiveRatioMeasure
    private SolarReflectanceBack_? : IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOpticalMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOpticalMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcOpticalMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VisibleTransmittance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'SolarTransmittance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'ThermalIrTransmittance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'ThermalIrEmissivityBack',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'ThermalIrEmissivityFront',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'VisibleReflectanceBack',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'VisibleReflectanceFront',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'SolarReflectanceFront',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'SolarReflectanceBack',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOpticalMaterialPropertiesSpecification = new IfcOpticalMaterialPropertiesSpecification();
}
