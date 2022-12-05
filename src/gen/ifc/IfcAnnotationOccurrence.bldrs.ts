
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationoccurrence.htm
 */
export default class IfcAnnotationOccurrence implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotationOccurrence';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcAnnotationOccurrenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationOccurrence';

    public readonly required: string[] = [ 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
