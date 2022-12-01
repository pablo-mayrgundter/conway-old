
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcStructuralReaction} from "./IfcStructuralReaction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralaction.htm
 */
export default class IfcStructuralAction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralAction';

    public readonly __version__: number = 0;

	DestabilizingLoad : boolean;
	CausedBy? : IfcStructuralReaction;

}

export class IfcStructuralActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralAction';

    public readonly required: string[] = [ 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DestabilizingLoad',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'CausedBy',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralReaction'
		}
    ];
}
