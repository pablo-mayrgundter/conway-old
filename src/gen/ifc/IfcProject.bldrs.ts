
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcRepresentationContext} from "./IfcRepresentationContext.bldrs"
import {IfcUnitAssignment} from "./IfcUnitAssignment.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproject.htm
 */
export default class IfcProject implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProject';

    public readonly __version__: number = 0;

	LongName? : IfcLabel;
	Phase? : IfcLabel;
	RepresentationContexts : Array<IfcRepresentationContext>;
	UnitsInContext : IfcUnitAssignment;

}

export class IfcProjectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProject';

    public readonly required: string[] = [ 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LongName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Phase',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'RepresentationContexts',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationContext>'
		}, 
		{
			name: 'UnitsInContext',
			isCollection: false,
			rank: 0,
			baseType: 'IfcUnitAssignment'
		}
    ];
}
