
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelement.htm
 */
export default class IfcFeatureElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFeatureElement';

    public readonly __version__: number = 0;


}

export class IfcFeatureElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFeatureElement';

    public readonly required: string[] = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
