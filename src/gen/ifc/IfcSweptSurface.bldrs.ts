
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptsurface.htm
 */
export default abstract class IfcSweptSurface extends IfcSurface 
{    
    public readonly specification: IfcSweptSurfaceSpecification = IfcSweptSurfaceSpecification.instance;

private SweptCurve_? : IfcProfileDef
    private Position_? : IfcAxis2Placement3D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSweptSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSweptSurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcSweptSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SweptCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef',
			optional: false
		}, 
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSweptSurfaceSpecification = new IfcSweptSurfaceSpecification();
}
