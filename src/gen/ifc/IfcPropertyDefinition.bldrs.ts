
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcRelAssociates} from "./IfcRelAssociates.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydefinition.htm
 */
export default class IfcPropertyDefinition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPropertyDefinition';

    public readonly __version__: number = 0;


}

export class IfcPropertyDefinitionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertyDefinition';

    public readonly required: string[] = [ 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
