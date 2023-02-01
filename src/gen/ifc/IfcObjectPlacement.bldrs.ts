
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProduct from "./IfcProduct.bldrs"
import IfcLocalPlacement from "./IfcLocalPlacement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectplacement.htm
 */
export default abstract class IfcObjectPlacement extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcObjectPlacementSpecification = IfcObjectPlacementSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcObjectPlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcObjectPlacement';

    public readonly required: ReadonlyArray< string > = [ 'IfcObjectPlacement' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcObjectPlacementSpecification = new IfcObjectPlacementSpecification();
}
