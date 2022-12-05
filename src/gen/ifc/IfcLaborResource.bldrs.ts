
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclaborresource.htm
 */
export default class IfcLaborResource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLaborResource';

    public readonly __version__: number = 0;

    constructor( public readonly SkillSet : IfcText  | undefined ) {}
}

export class IfcLaborResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLaborResource';

    public readonly required: string[] = [ 'IfcConstructionResource', 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SkillSet',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
