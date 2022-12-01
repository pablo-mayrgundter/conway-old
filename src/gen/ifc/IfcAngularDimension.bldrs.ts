
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcangulardimension.htm
 */
export default class IfcAngularDimension implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAngularDimension';

    public readonly __version__: number = 0;


}

export class IfcAngularDimensionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAngularDimension';

    public readonly required: string[] = [ 'IfcDimensionCurveDirectedCallout', 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
