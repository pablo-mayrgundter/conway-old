
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourceambient.htm
 */
export default class IfcLightSourceAmbient implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightSourceAmbient';

    public readonly __version__: number = 0;


}

export class IfcLightSourceAmbientSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourceAmbient';

    public readonly required: string[] = [ 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
