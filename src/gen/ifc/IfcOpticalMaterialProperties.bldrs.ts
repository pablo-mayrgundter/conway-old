
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcopticalmaterialproperties.htm
 */
export default class IfcOpticalMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOpticalMaterialProperties';

    public readonly __version__: number = 0;

    constructor( public readonly VisibleTransmittance : IfcPositiveRatioMeasure  | undefined, public readonly SolarTransmittance : IfcPositiveRatioMeasure  | undefined, public readonly ThermalIrTransmittance : IfcPositiveRatioMeasure  | undefined, public readonly ThermalIrEmissivityBack : IfcPositiveRatioMeasure  | undefined, public readonly ThermalIrEmissivityFront : IfcPositiveRatioMeasure  | undefined, public readonly VisibleReflectanceBack : IfcPositiveRatioMeasure  | undefined, public readonly VisibleReflectanceFront : IfcPositiveRatioMeasure  | undefined, public readonly SolarReflectanceFront : IfcPositiveRatioMeasure  | undefined, public readonly SolarReflectanceBack : IfcPositiveRatioMeasure  | undefined ) {}
}

export class IfcOpticalMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOpticalMaterialProperties';

    public readonly required: string[] = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'VisibleTransmittance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'SolarTransmittance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'ThermalIrTransmittance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'ThermalIrEmissivityBack',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'ThermalIrEmissivityFront',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'VisibleReflectanceBack',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'VisibleReflectanceFront',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'SolarReflectanceFront',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'SolarReflectanceBack',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}
    ];
}
