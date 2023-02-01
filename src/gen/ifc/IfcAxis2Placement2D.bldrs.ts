
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement2d.htm
 */
export default  class IfcAxis2Placement2D extends IfcPlacement 
{    
    public readonly specification: IfcAxis2Placement2DSpecification = IfcAxis2Placement2DSpecification.instance;

private RefDirection_? : IfcDirection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAxis2Placement2DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAxis2Placement2D';

    public readonly required: ReadonlyArray< string > = [ 'IfcAxis2Placement2D', 'IfcPlacement', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RefDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAxis2Placement2DSpecification = new IfcAxis2Placement2DSpecification();
}
