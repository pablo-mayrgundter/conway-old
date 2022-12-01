
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelnests.htm
 */
export default class IfcRelNests implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelNests';

    public readonly __version__: number = 0;


}

export class IfcRelNestsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelNests';

    public readonly required: string[] = [ 'IfcRelDecomposes', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
