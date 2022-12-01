
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccondition.htm
 */
export default class IfcCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCondition';

    public readonly __version__: number = 0;


}

export class IfcConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCondition';

    public readonly required: string[] = [ 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
