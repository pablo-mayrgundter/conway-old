
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedsurface.htm
 */
export default class IfcBoundedSurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundedSurface';

    public readonly __version__: number = 0;


}

export class IfcBoundedSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundedSurface';

    public readonly required: string[] = [ 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
