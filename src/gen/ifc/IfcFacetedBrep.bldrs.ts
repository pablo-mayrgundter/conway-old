
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrep.htm
 */
export default  class IfcFacetedBrep extends IfcManifoldSolidBrep 
{    
    public readonly specification: IfcFacetedBrepSpecification = IfcFacetedBrepSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFacetedBrepSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFacetedBrep';

    public readonly required: ReadonlyArray< string > = [ 'IfcFacetedBrep', 'IfcManifoldSolidBrep', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFacetedBrepSpecification = new IfcFacetedBrepSpecification();
}
