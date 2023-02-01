
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator2d.htm
 */
export default  class IfcCartesianTransformationOperator2D extends IfcCartesianTransformationOperator 
{    
    public readonly specification: IfcCartesianTransformationOperator2DSpecification = IfcCartesianTransformationOperator2DSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCartesianTransformationOperator2DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator2D';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianTransformationOperator2D', 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperator2DSpecification = new IfcCartesianTransformationOperator2DSpecification();
}
