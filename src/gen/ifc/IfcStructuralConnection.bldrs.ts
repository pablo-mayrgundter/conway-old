
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"
import IfcRelConnectsStructuralMember from "./IfcRelConnectsStructuralMember.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnection.htm
 */
export default class IfcStructuralConnection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralConnection';

    public readonly __version__: number = 0;

    constructor( public readonly AppliedCondition : IfcBoundaryCondition  | undefined ) {}
}

export class IfcStructuralConnectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralConnection';

    public readonly required: string[] = [ 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'AppliedCondition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundaryCondition'
		}
    ];
}
