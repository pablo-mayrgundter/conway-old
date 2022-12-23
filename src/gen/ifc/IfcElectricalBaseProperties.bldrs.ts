
import Component from "../../core/components"
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
export default class IfcElectricalBaseProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricalBaseProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElectricalBasePropertiesSpecification = IfcElectricalBasePropertiesSpecification.instance;

    constructor( public readonly ElectricCurrentType : IfcElectricCurrentEnum  | undefined, public readonly InputVoltage : IfcElectricVoltageMeasure , public readonly InputFrequency : IfcFrequencyMeasure , public readonly FullLoadCurrent : IfcElectricCurrentMeasure  | undefined, public readonly MinimumCircuitCurrent : IfcElectricCurrentMeasure  | undefined, public readonly MaximumPowerInput : IfcPowerMeasure  | undefined, public readonly RatedPowerInput : IfcPowerMeasure  | undefined, public readonly InputPhase : number  ) {}
}

export class IfcElectricalBasePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricalBaseProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ElectricCurrentType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricCurrentEnum'
		}, 
		{
			name: 'InputVoltage',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricVoltageMeasure'
		}, 
		{
			name: 'InputFrequency',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFrequencyMeasure'
		}, 
		{
			name: 'FullLoadCurrent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricCurrentMeasure'
		}, 
		{
			name: 'MinimumCircuitCurrent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricCurrentMeasure'
		}, 
		{
			name: 'MaximumPowerInput',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure'
		}, 
		{
			name: 'RatedPowerInput',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure'
		}, 
		{
			name: 'InputPhase',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElectricalBasePropertiesSpecification = new IfcElectricalBasePropertiesSpecification();
}
