
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMomentOfInertiaMeasure from "./IfcMomentOfInertiaMeasure.bldrs"
import IfcWarpingConstantMeasure from "./IfcWarpingConstantMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcSectionModulusMeasure from "./IfcSectionModulusMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralprofileproperties.htm
 */
export default class IfcStructuralProfileProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralProfileProperties';

    public readonly __version__: number = 0;

    constructor( public readonly TorsionalConstantX : IfcMomentOfInertiaMeasure  | undefined, public readonly MomentOfInertiaYZ : IfcMomentOfInertiaMeasure  | undefined, public readonly MomentOfInertiaY : IfcMomentOfInertiaMeasure  | undefined, public readonly MomentOfInertiaZ : IfcMomentOfInertiaMeasure  | undefined, public readonly WarpingConstant : IfcWarpingConstantMeasure  | undefined, public readonly ShearCentreZ : IfcLengthMeasure  | undefined, public readonly ShearCentreY : IfcLengthMeasure  | undefined, public readonly ShearDeformationAreaZ : IfcAreaMeasure  | undefined, public readonly ShearDeformationAreaY : IfcAreaMeasure  | undefined, public readonly MaximumSectionModulusY : IfcSectionModulusMeasure  | undefined, public readonly MinimumSectionModulusY : IfcSectionModulusMeasure  | undefined, public readonly MaximumSectionModulusZ : IfcSectionModulusMeasure  | undefined, public readonly MinimumSectionModulusZ : IfcSectionModulusMeasure  | undefined, public readonly TorsionalSectionModulus : IfcSectionModulusMeasure  | undefined, public readonly CentreOfGravityInX : IfcLengthMeasure  | undefined, public readonly CentreOfGravityInY : IfcLengthMeasure  | undefined ) {}
}

export class IfcStructuralProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralProfileProperties';

    public readonly required: string[] = [ 'IfcGeneralProfileProperties', 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TorsionalConstantX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure'
		}, 
		{
			name: 'MomentOfInertiaYZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure'
		}, 
		{
			name: 'MomentOfInertiaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure'
		}, 
		{
			name: 'MomentOfInertiaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure'
		}, 
		{
			name: 'WarpingConstant',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWarpingConstantMeasure'
		}, 
		{
			name: 'ShearCentreZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'ShearCentreY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'ShearDeformationAreaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'ShearDeformationAreaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'MaximumSectionModulusY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure'
		}, 
		{
			name: 'MinimumSectionModulusY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure'
		}, 
		{
			name: 'MaximumSectionModulusZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure'
		}, 
		{
			name: 'MinimumSectionModulusZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure'
		}, 
		{
			name: 'TorsionalSectionModulus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure'
		}, 
		{
			name: 'CentreOfGravityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'CentreOfGravityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
