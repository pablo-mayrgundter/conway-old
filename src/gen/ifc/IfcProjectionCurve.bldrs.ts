
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectioncurve.htm
 */
export default class IfcProjectionCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProjectionCurve';

    public readonly __version__: number = 0;


}

export class IfcProjectionCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProjectionCurve';

    public readonly required: string[] = [ 'IfcAnnotationCurveOccurrence', 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
