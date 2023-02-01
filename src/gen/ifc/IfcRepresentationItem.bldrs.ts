
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPresentationLayerAssignment from "./IfcPresentationLayerAssignment.bldrs"
import IfcStyledItem from "./IfcStyledItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationitem.htm
 */
export default abstract class IfcRepresentationItem extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcRepresentationItemSpecification = IfcRepresentationItemSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRepresentationItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRepresentationItem';

    public readonly required: ReadonlyArray< string > = [ 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRepresentationItemSpecification = new IfcRepresentationItemSpecification();
}
