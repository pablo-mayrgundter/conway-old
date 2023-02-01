
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPoint from "./IfcPoint.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricset.htm
 */
export default  class IfcGeometricSet extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcGeometricSetSpecification = IfcGeometricSetSpecification.instance;

private Elements_? : Array<IfcPoint|IfcCurve|IfcSurface>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGeometricSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricSet';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricSet', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Elements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPoint|IfcCurve|IfcSurface>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeometricSetSpecification = new IfcGeometricSetSpecification();
}
