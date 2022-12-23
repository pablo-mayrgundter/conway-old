
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactionrequest.htm
 */
export default class IfcActionRequest implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcActionRequest';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcActionRequestSpecification = IfcActionRequestSpecification.instance;

    constructor( public readonly RequestID : IfcIdentifier  ) {}
}

export class IfcActionRequestSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActionRequest';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RequestID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcActionRequestSpecification = new IfcActionRequestSpecification();
}
