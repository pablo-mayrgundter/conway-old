
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcloop.htm
 */
export default class IfcLoop implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLoop';

    public readonly __version__: number = 0;


}

export class IfcLoopSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLoop';

    public readonly required: string[] = [ 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
