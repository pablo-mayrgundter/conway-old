
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcThermalLoadSourceEnum from "./IfcThermalLoadSourceEnum.bldrs"
import IfcPropertySourceEnum from "./IfcPropertySourceEnum.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcPowerMeasure from "./IfcPowerMeasure.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcThermalLoadTypeEnum from "./IfcThermalLoadTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspacethermalloadproperties.htm
 */
export default class IfcSpaceThermalLoadProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSpaceThermalLoadProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSpaceThermalLoadPropertiesSpecification = IfcSpaceThermalLoadPropertiesSpecification.instance;

    constructor( public readonly ApplicableValueRatio : IfcPositiveRatioMeasure  | undefined, public readonly ThermalLoadSource : IfcThermalLoadSourceEnum , public readonly PropertySource : IfcPropertySourceEnum , public readonly SourceDescription : IfcText  | undefined, public readonly MaximumValue : IfcPowerMeasure , public readonly MinimumValue : IfcPowerMeasure  | undefined, public readonly ThermalLoadTimeSeriesValues : IfcTimeSeries  | undefined, public readonly UserDefinedThermalLoadSource : IfcLabel  | undefined, public readonly UserDefinedPropertySource : IfcLabel  | undefined, public readonly ThermalLoadType : IfcThermalLoadTypeEnum  ) {}
}

export class IfcSpaceThermalLoadPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpaceThermalLoadProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ApplicableValueRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'ThermalLoadSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalLoadSourceEnum'
		}, 
		{
			name: 'PropertySource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPropertySourceEnum'
		}, 
		{
			name: 'SourceDescription',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'MaximumValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure'
		}, 
		{
			name: 'MinimumValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure'
		}, 
		{
			name: 'ThermalLoadTimeSeriesValues',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeries'
		}, 
		{
			name: 'UserDefinedThermalLoadSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'UserDefinedPropertySource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ThermalLoadType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalLoadTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceThermalLoadPropertiesSpecification = new IfcSpaceThermalLoadPropertiesSpecification();
}
