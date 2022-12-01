
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcWindowStyleConstructionEnum} from "./IfcWindowStyleConstructionEnum.bldrs"
import {IfcWindowStyleOperationEnum} from "./IfcWindowStyleOperationEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowstyle.htm
 */
export default class IfcWindowStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWindowStyle';

    public readonly __version__: number = 0;

	ConstructionType : IfcWindowStyleConstructionEnum;
	OperationType : IfcWindowStyleOperationEnum;
	ParameterTakesPrecedence : boolean;
	Sizeable : boolean;

}

export class IfcWindowStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindowStyle';

    public readonly required: string[] = [ 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ConstructionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowStyleConstructionEnum'
		}, 
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowStyleOperationEnum'
		}, 
		{
			name: 'ParameterTakesPrecedence',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'Sizeable',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];
}
