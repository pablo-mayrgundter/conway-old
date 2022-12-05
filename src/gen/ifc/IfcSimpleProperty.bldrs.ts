
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimpleproperty.htm
 */
export default class IfcSimpleProperty implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSimpleProperty';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcSimplePropertySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSimpleProperty';

    public readonly required: string[] = [ 'IfcProperty' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
