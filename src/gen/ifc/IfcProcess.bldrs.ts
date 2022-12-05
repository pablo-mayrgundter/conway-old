
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRelAssignsToProcess from "./IfcRelAssignsToProcess.bldrs"
import IfcRelSequence from "./IfcRelSequence.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprocess.htm
 */
export default class IfcProcess implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProcess';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcProcessSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProcess';

    public readonly required: string[] = [ 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
