
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostitem.htm
 */
export default class IfcCostItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCostItem';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcCostItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCostItem';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}