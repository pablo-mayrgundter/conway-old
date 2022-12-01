
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgroup.htm
 */
export default class IfcGroup implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGroup';

    public readonly __version__: number = 0;


}

export class IfcGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGroup';

    public readonly required: string[] = [ 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
