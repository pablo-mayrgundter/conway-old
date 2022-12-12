
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensionalexponents.htm
 */
export default class IfcDimensionalExponents implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDimensionalExponents';

    public readonly __version__: number = 0;

    constructor( public readonly LengthExponent : number , public readonly MassExponent : number , public readonly TimeExponent : number , public readonly ElectricCurrentExponent : number , public readonly ThermodynamicTemperatureExponent : number , public readonly AmountOfSubstanceExponent : number , public readonly LuminousIntensityExponent : number  ) {}
}

export class IfcDimensionalExponentsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionalExponents';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LengthExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'MassExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'TimeExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'ElectricCurrentExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'ThermodynamicTemperatureExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'AmountOfSubstanceExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'LuminousIntensityExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}
    ];
}