
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprojectorder.htm
 */
export default  class IfcRelAssignsToProjectOrder extends IfcRelAssignsToControl 
{    
    public readonly specification: IfcRelAssignsToProjectOrderSpecification = IfcRelAssignsToProjectOrderSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsToProjectOrderSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToProjectOrder';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToProjectOrder', 'IfcRelAssignsToControl', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToProjectOrderSpecification = new IfcRelAssignsToProjectOrderSpecification();
}
