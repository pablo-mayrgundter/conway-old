
import Component from "../../core/components"
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
export default class IfcProcedure implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProcedure';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProcedureSpecification = IfcProcedureSpecification.instance;

    constructor( public readonly ProcedureID : IfcIdentifier , public readonly ProcedureType : IfcProcedureTypeEnum , public readonly UserDefinedProcedureType : IfcLabel  | undefined ) {}
}

export class IfcProcedureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProcedure';

    public readonly required: ReadonlyArray< string > = [ 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProcedureID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'ProcedureType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcedureTypeEnum'
		}, 
		{
			name: 'UserDefinedProcedureType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProcedureSpecification = new IfcProcedureSpecification();
}
