
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconic.htm
 */
export default abstract class IfcConic extends IfcCurve 
{    
    public readonly specification: IfcConicSpecification = IfcConicSpecification.instance;

private Position_? : IfcAxis2Placement2D|IfcAxis2Placement3D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConicSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConic';

    public readonly required: ReadonlyArray< string > = [ 'IfcConic', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConicSpecification = new IfcConicSpecification();
}
