
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElectricCurrentEnum from "./IfcElectricCurrentEnum.bldrs"
import IfcElectricVoltageMeasure from "./IfcElectricVoltageMeasure.bldrs"
import IfcFrequencyMeasure from "./IfcFrequencyMeasure.bldrs"
import IfcElectricCurrentMeasure from "./IfcElectricCurrentMeasure.bldrs"
import IfcPowerMeasure from "./IfcPowerMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricalbaseproperties.htm
 */
export default  class IfcElectricalBaseProperties extends IfcEnergyProperties 
{    
    public readonly specification: IfcElectricalBasePropertiesSpecification = IfcElectricalBasePropertiesSpecification.instance;

private ElectricCurrentType_? : IfcElectricCurrentEnum
    private InputVoltage_? : IfcElectricVoltageMeasure
    private InputFrequency_? : IfcFrequencyMeasure
    private FullLoadCurrent_? : IfcElectricCurrentMeasure
    private MinimumCircuitCurrent_? : IfcElectricCurrentMeasure
    private MaximumPowerInput_? : IfcPowerMeasure
    private RatedPowerInput_? : IfcPowerMeasure
    private InputPhase_? : number

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElectricalBasePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricalBaseProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcElectricalBaseProperties', 'IfcEnergyProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ElectricCurrentType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricCurrentEnum',
			optional: true
		}, 
		{
			name: 'InputVoltage',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricVoltageMeasure',
			optional: false
		}, 
		{
			name: 'InputFrequency',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFrequencyMeasure',
			optional: false
		}, 
		{
			name: 'FullLoadCurrent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricCurrentMeasure',
			optional: true
		}, 
		{
			name: 'MinimumCircuitCurrent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricCurrentMeasure',
			optional: true
		}, 
		{
			name: 'MaximumPowerInput',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure',
			optional: true
		}, 
		{
			name: 'RatedPowerInput',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure',
			optional: true
		}, 
		{
			name: 'InputPhase',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElectricalBasePropertiesSpecification = new IfcElectricalBasePropertiesSpecification();
}
