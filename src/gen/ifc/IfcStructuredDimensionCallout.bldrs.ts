
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructureddimensioncallout.htm
 */
export default class IfcStructuredDimensionCallout implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuredDimensionCallout';

    public readonly __version__: number = 0;


}

export class IfcStructuredDimensionCalloutSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuredDimensionCallout';

    public readonly required: string[] = [ 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
