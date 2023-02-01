
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelAssignsToProjectOrder from "./IfcRelAssignsToProjectOrder.bldrs"
import IfcProjectOrderRecordTypeEnum from "./IfcProjectOrderRecordTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectorderrecord.htm
 */
export default  class IfcProjectOrderRecord extends IfcControl 
{    
    public readonly specification: IfcProjectOrderRecordSpecification = IfcProjectOrderRecordSpecification.instance;

private Records_? : Array<IfcRelAssignsToProjectOrder>
    private PredefinedType_? : IfcProjectOrderRecordTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProjectOrderRecordSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProjectOrderRecord';

    public readonly required: ReadonlyArray< string > = [ 'IfcProjectOrderRecord', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Records',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRelAssignsToProjectOrder>',
			optional: false
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProjectOrderRecordTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProjectOrderRecordSpecification = new IfcProjectOrderRecordSpecification();
}
