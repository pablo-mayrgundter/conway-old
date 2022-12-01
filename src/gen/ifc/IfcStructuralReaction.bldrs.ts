
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcStructuralAction} from "./IfcStructuralAction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralreaction.htm
 */
export default class IfcStructuralReaction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralReaction';

    public readonly __version__: number = 0;


}

export class IfcStructuralReactionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralReaction';

    public readonly required: string[] = [ 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
