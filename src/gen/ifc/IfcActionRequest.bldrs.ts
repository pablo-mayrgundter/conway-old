
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcIdentifier} from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactionrequest.htm
 */
export default class IfcActionRequest implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcActionRequest';

    public readonly __version__: number = 0;

	RequestID : IfcIdentifier;

}

export class IfcActionRequestSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActionRequest';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RequestID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];
}
