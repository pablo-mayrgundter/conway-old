
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctopologyrepresentation.htm
 */
export default class IfcTopologyRepresentation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTopologyRepresentation';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcTopologyRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTopologyRepresentation';

    public readonly required: string[] = [ 'IfcShapeModel', 'IfcRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
