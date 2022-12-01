
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdiameterdimension.htm
 */
export default class IfcDiameterDimension implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDiameterDimension';

    public readonly __version__: number = 0;


}

export class IfcDiameterDimensionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDiameterDimension';

    public readonly required: string[] = [ 'IfcDimensionCurveDirectedCallout', 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
