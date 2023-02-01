
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcControl from "./IfcControl.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstocontrol.htm
 */
export default  class IfcRelAssignsToControl extends IfcRelAssigns 
{    
    public readonly specification: IfcRelAssignsToControlSpecification = IfcRelAssignsToControlSpecification.instance;

private RelatingControl_? : IfcControl

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsToControlSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToControl';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToControl', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingControl',
			isCollection: false,
			rank: 0,
			baseType: 'IfcControl',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToControlSpecification = new IfcRelAssignsToControlSpecification();
}
