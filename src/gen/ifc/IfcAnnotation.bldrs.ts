
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRelContainedInSpatialStructure from "./IfcRelContainedInSpatialStructure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotation.htm
 */
export default class IfcAnnotation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotation';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcAnnotationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotation';

    public readonly required: string[] = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
