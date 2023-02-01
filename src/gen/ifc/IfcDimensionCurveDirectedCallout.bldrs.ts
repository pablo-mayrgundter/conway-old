
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensioncurvedirectedcallout.htm
 */
export default  class IfcDimensionCurveDirectedCallout extends IfcDraughtingCallout 
{    
    public readonly specification: IfcDimensionCurveDirectedCalloutSpecification = IfcDimensionCurveDirectedCalloutSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDimensionCurveDirectedCalloutSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionCurveDirectedCallout';

    public readonly required: ReadonlyArray< string > = [ 'IfcDimensionCurveDirectedCallout', 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDimensionCurveDirectedCalloutSpecification = new IfcDimensionCurveDirectedCalloutSpecification();
}
