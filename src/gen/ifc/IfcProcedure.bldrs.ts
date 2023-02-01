
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcProcedureTypeEnum from "./IfcProcedureTypeEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprocedure.htm
 */
export default  class IfcProcedure extends IfcProcess 
{    
    public readonly specification: IfcProcedureSpecification = IfcProcedureSpecification.instance;

private ProcedureID_? : IfcIdentifier
    private ProcedureType_? : IfcProcedureTypeEnum
    private UserDefinedProcedureType_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProcedureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProcedure';

    public readonly required: ReadonlyArray< string > = [ 'IfcProcedure', 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProcedureID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'ProcedureType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcedureTypeEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedProcedureType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProcedureSpecification = new IfcProcedureSpecification();
}
