
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifc2dcompositecurve.htm
 */
export default  class Ifc2DCompositeCurve extends IfcCompositeCurve 
{    
    public readonly specification: Ifc2DCompositeCurveSpecification = Ifc2DCompositeCurveSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class Ifc2DCompositeCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'Ifc2DCompositeCurve';

    public readonly required: ReadonlyArray< string > = [ 'Ifc2DCompositeCurve', 'IfcCompositeCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: Ifc2DCompositeCurveSpecification = new Ifc2DCompositeCurveSpecification();
}
