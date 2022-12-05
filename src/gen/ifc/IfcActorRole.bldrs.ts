
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRoleEnum from "./IfcRoleEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactorrole.htm
 */
export default class IfcActorRole implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcActorRole';

    public readonly __version__: number = 0;

    constructor( public readonly Role : IfcRoleEnum , public readonly UserDefinedRole : IfcLabel  | undefined, public readonly Description : IfcText  | undefined ) {}
}

export class IfcActorRoleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActorRole';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Role',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRoleEnum'
		}, 
		{
			name: 'UserDefinedRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
