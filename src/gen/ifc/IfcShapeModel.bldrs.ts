
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapemodel.htm
 */
export default class IfcShapeModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcShapeModel';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcShapeModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcShapeModel';

    public readonly required: string[] = [ 'IfcRepresentation' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
