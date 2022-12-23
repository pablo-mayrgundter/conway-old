
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesconstraint.htm
 */
export default class IfcRelAssociatesConstraint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesConstraint';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssociatesConstraintSpecification = IfcRelAssociatesConstraintSpecification.instance;

    constructor( public readonly Intent : IfcLabel , public readonly RelatingConstraint : IfcConstraint  ) {}
}

export class IfcRelAssociatesConstraintSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesConstraint';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Intent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesConstraintSpecification = new IfcRelAssociatesConstraintSpecification();
}
