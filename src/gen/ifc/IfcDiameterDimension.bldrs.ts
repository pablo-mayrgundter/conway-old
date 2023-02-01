
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdiameterdimension.htm
 */
export default  class IfcDiameterDimension extends IfcDimensionCurveDirectedCallout 
{    
    public readonly specification: IfcDiameterDimensionSpecification = IfcDiameterDimensionSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDiameterDimensionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDiameterDimension';

    public readonly required: ReadonlyArray< string > = [ 'IfcDiameterDimension', 'IfcDimensionCurveDirectedCallout', 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDiameterDimensionSpecification = new IfcDiameterDimensionSpecification();
}
