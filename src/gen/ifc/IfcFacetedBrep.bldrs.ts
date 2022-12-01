
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrep.htm
 */
export default class IfcFacetedBrep implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFacetedBrep';

    public readonly __version__: number = 0;


}

export class IfcFacetedBrepSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFacetedBrep';

    public readonly required: string[] = [ 'IfcManifoldSolidBrep', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
