
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemembervarying.htm
 */
export default  class IfcStructuralSurfaceMemberVarying extends IfcStructuralSurfaceMember 
{    
    public readonly specification: IfcStructuralSurfaceMemberVaryingSpecification = IfcStructuralSurfaceMemberVaryingSpecification.instance;

private SubsequentThickness_? : Array<IfcPositiveLengthMeasure>
    private VaryingThicknessLocation_? : IfcShapeAspect

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralSurfaceMemberVaryingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralSurfaceMemberVarying';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralSurfaceMemberVarying', 'IfcStructuralSurfaceMember', 'IfcStructuralMember', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SubsequentThickness',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPositiveLengthMeasure>',
			optional: false
		}, 
		{
			name: 'VaryingThicknessLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralSurfaceMemberVaryingSpecification = new IfcStructuralSurfaceMemberVaryingSpecification();
}
