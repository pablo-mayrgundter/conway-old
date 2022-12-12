
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfastener.htm
 */
export default class IfcFastener implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFastener';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcFastenerSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFastener';

    public readonly required: string[] = [ 'IfcElementComponent', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}