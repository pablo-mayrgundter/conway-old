
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurve.htm
 */
export default class IfcCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurve';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurve';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
