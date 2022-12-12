
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstylemodel.htm
 */
export default class IfcStyleModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStyleModel';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcStyleModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStyleModel';

    public readonly required: string[] = [ 'IfcRepresentation' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}