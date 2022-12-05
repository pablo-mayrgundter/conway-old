
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRelAssignsToControl from "./IfcRelAssignsToControl.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontrol.htm
 */
export default class IfcControl implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcControl';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcControlSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcControl';

    public readonly required: string[] = [ 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
