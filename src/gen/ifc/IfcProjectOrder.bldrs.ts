
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcProjectOrderTypeEnum from "./IfcProjectOrderTypeEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectorder.htm
 */
export default  class IfcProjectOrder extends IfcControl 
{    
    public readonly specification: IfcProjectOrderSpecification = IfcProjectOrderSpecification.instance;

private ID_? : IfcIdentifier
    private PredefinedType_? : IfcProjectOrderTypeEnum
    private Status_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProjectOrderSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProjectOrder';

    public readonly required: ReadonlyArray< string > = [ 'IfcProjectOrder', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProjectOrderTypeEnum',
			optional: false
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProjectOrderSpecification = new IfcProjectOrderSpecification();
}
