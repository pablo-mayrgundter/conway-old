
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorderaction.htm
 */
export default  class IfcOrderAction extends IfcTask 
{    
    public readonly specification: IfcOrderActionSpecification = IfcOrderActionSpecification.instance;

private ActionID_? : IfcIdentifier

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOrderActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrderAction';

    public readonly required: ReadonlyArray< string > = [ 'IfcOrderAction', 'IfcTask', 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ActionID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOrderActionSpecification = new IfcOrderActionSpecification();
}
