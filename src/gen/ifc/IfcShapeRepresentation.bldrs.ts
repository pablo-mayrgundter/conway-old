
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshaperepresentation.htm
 */
export default class IfcShapeRepresentation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcShapeRepresentation';

    public readonly __version__: number = 0;


}

export class IfcShapeRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcShapeRepresentation';

    public readonly required: string[] = [ 'IfcShapeModel', 'IfcRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
