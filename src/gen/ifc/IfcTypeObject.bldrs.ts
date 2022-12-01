
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.bldrs"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeobject.htm
 */
export default class IfcTypeObject implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTypeObject';

    public readonly __version__: number = 0;

	ApplicableOccurrence? : IfcLabel;
	HasPropertySets? : Array<IfcPropertySetDefinition>;

}

export class IfcTypeObjectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTypeObject';

    public readonly required: string[] = [ 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ApplicableOccurrence',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'HasPropertySets',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPropertySetDefinition>'
		}
    ];
}
