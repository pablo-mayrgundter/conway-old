
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurveconnection.htm
 */
export default class IfcStructuralCurveConnection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralCurveConnection';

    public readonly __version__: number = 0;


}

export class IfcStructuralCurveConnectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralCurveConnection';

    public readonly required: string[] = [ 'IfcStructuralConnection', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
