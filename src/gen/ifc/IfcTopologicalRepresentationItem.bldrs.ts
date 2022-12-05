
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctopologicalrepresentationitem.htm
 */
export default class IfcTopologicalRepresentationItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTopologicalRepresentationItem';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcTopologicalRepresentationItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTopologicalRepresentationItem';

    public readonly required: string[] = [ 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
