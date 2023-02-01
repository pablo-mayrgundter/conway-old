
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionportgeometry.htm
 */
export default  class IfcConnectionPortGeometry extends IfcConnectionGeometry 
{    
    public readonly specification: IfcConnectionPortGeometrySpecification = IfcConnectionPortGeometrySpecification.instance;

private LocationAtRelatingElement_? : IfcAxis2Placement2D|IfcAxis2Placement3D
    private LocationAtRelatedElement_? : IfcAxis2Placement2D|IfcAxis2Placement3D
    private ProfileOfPort_? : IfcProfileDef

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConnectionPortGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionPortGeometry';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionPortGeometry', 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LocationAtRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D',
			optional: false
		}, 
		{
			name: 'LocationAtRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D',
			optional: true
		}, 
		{
			name: 'ProfileOfPort',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionPortGeometrySpecification = new IfcConnectionPortGeometrySpecification();
}
