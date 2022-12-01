
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplane.htm
 */
export default class IfcPlane implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPlane';

    public readonly __version__: number = 0;


}

export class IfcPlaneSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPlane';

    public readonly required: string[] = [ 'IfcElementarySurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
