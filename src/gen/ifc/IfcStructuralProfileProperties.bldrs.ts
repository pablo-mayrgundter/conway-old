
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMomentOfInertiaMeasure from "./IfcMomentOfInertiaMeasure.bldrs"
import IfcWarpingConstantMeasure from "./IfcWarpingConstantMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcSectionModulusMeasure from "./IfcSectionModulusMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralprofileproperties.htm
 */
export default  class IfcStructuralProfileProperties extends IfcGeneralProfileProperties 
{    
    public readonly specification: IfcStructuralProfilePropertiesSpecification = IfcStructuralProfilePropertiesSpecification.instance;

private TorsionalConstantX_? : IfcMomentOfInertiaMeasure
    private MomentOfInertiaYZ_? : IfcMomentOfInertiaMeasure
    private MomentOfInertiaY_? : IfcMomentOfInertiaMeasure
    private MomentOfInertiaZ_? : IfcMomentOfInertiaMeasure
    private WarpingConstant_? : IfcWarpingConstantMeasure
    private ShearCentreZ_? : IfcLengthMeasure
    private ShearCentreY_? : IfcLengthMeasure
    private ShearDeformationAreaZ_? : IfcAreaMeasure
    private ShearDeformationAreaY_? : IfcAreaMeasure
    private MaximumSectionModulusY_? : IfcSectionModulusMeasure
    private MinimumSectionModulusY_? : IfcSectionModulusMeasure
    private MaximumSectionModulusZ_? : IfcSectionModulusMeasure
    private MinimumSectionModulusZ_? : IfcSectionModulusMeasure
    private TorsionalSectionModulus_? : IfcSectionModulusMeasure
    private CentreOfGravityInX_? : IfcLengthMeasure
    private CentreOfGravityInY_? : IfcLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralProfileProperties', 'IfcGeneralProfileProperties', 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TorsionalConstantX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure',
			optional: true
		}, 
		{
			name: 'MomentOfInertiaYZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure',
			optional: true
		}, 
		{
			name: 'MomentOfInertiaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure',
			optional: true
		}, 
		{
			name: 'MomentOfInertiaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMomentOfInertiaMeasure',
			optional: true
		}, 
		{
			name: 'WarpingConstant',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWarpingConstantMeasure',
			optional: true
		}, 
		{
			name: 'ShearCentreZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'ShearCentreY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'ShearDeformationAreaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: true
		}, 
		{
			name: 'ShearDeformationAreaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: true
		}, 
		{
			name: 'MaximumSectionModulusY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure',
			optional: true
		}, 
		{
			name: 'MinimumSectionModulusY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure',
			optional: true
		}, 
		{
			name: 'MaximumSectionModulusZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure',
			optional: true
		}, 
		{
			name: 'MinimumSectionModulusZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure',
			optional: true
		}, 
		{
			name: 'TorsionalSectionModulus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionModulusMeasure',
			optional: true
		}, 
		{
			name: 'CentreOfGravityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'CentreOfGravityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralProfilePropertiesSpecification = new IfcStructuralProfilePropertiesSpecification();
}
