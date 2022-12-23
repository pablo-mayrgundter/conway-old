
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcProperty from "./IfcProperty.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyconstraintrelationship.htm
 */
export default class IfcPropertyConstraintRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPropertyConstraintRelationship';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPropertyConstraintRelationshipSpecification = IfcPropertyConstraintRelationshipSpecification.instance;

    constructor( public readonly RelatingConstraint : IfcConstraint , public readonly RelatedProperties : Array<IfcProperty> , public readonly Name : IfcLabel  | undefined, public readonly Description : IfcText  | undefined ) {}
}

export class IfcPropertyConstraintRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertyConstraintRelationship';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint'
		}, 
		{
			name: 'RelatedProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>'
		}, 
		{
			name: 'Name',
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertyConstraintRelationshipSpecification = new IfcPropertyConstraintRelationshipSpecification();
}
