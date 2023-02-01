
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanclippingresult.htm
 */
export default  class IfcBooleanClippingResult extends IfcBooleanResult 
{    
    public readonly specification: IfcBooleanClippingResultSpecification = IfcBooleanClippingResultSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBooleanClippingResultSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBooleanClippingResult';

    public readonly required: ReadonlyArray< string > = [ 'IfcBooleanClippingResult', 'IfcBooleanResult', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBooleanClippingResultSpecification = new IfcBooleanClippingResultSpecification();
}
