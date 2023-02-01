
import Component from "../../core/component"
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
export default  class IfcSpaceThermalLoadProperties extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcSpaceThermalLoadPropertiesSpecification = IfcSpaceThermalLoadPropertiesSpecification.instance;

private ApplicableValueRatio_? : IfcPositiveRatioMeasure
    private ThermalLoadSource_? : IfcThermalLoadSourceEnum
    private PropertySource_? : IfcPropertySourceEnum
    private SourceDescription_? : IfcText
    private MaximumValue_? : IfcPowerMeasure
    private MinimumValue_? : IfcPowerMeasure
    private ThermalLoadTimeSeriesValues_? : IfcTimeSeries
    private UserDefinedThermalLoadSource_? : IfcLabel
    private UserDefinedPropertySource_? : IfcLabel
    private ThermalLoadType_? : IfcThermalLoadTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSpaceThermalLoadPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpaceThermalLoadProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcSpaceThermalLoadProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ApplicableValueRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'ThermalLoadSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalLoadSourceEnum',
			optional: false
		}, 
		{
			name: 'PropertySource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPropertySourceEnum',
			optional: false
		}, 
		{
			name: 'SourceDescription',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'MaximumValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure',
			optional: false
		}, 
		{
			name: 'MinimumValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPowerMeasure',
			optional: true
		}, 
		{
			name: 'ThermalLoadTimeSeriesValues',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeries',
			optional: true
		}, 
		{
			name: 'UserDefinedThermalLoadSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'UserDefinedPropertySource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ThermalLoadType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalLoadTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceThermalLoadPropertiesSpecification = new IfcSpaceThermalLoadPropertiesSpecification();
}
