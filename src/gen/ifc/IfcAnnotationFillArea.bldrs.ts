
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillarea.htm
 */
export default  class IfcAnnotationFillArea extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcAnnotationFillAreaSpecification = IfcAnnotationFillAreaSpecification.instance;

private OuterBoundary_? : IfcCurve
    private InnerBoundaries_? : Array<IfcCurve>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAnnotationFillAreaSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationFillArea';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationFillArea', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OuterBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}, 
		{
			name: 'InnerBoundaries',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurve>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationFillAreaSpecification = new IfcAnnotationFillAreaSpecification();
}
