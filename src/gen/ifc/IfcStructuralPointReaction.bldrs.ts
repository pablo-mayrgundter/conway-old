
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralpointreaction.htm
 */
export default class IfcStructuralPointReaction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralPointReaction';

    public readonly __version__: number = 0;


}

export class IfcStructuralPointReactionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralPointReaction';

    public readonly required: string[] = [ 'IfcStructuralReaction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
