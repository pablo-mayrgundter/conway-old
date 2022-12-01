
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurvemembervarying.htm
 */
export default class IfcStructuralCurveMemberVarying implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralCurveMemberVarying';

    public readonly __version__: number = 0;


}

export class IfcStructuralCurveMemberVaryingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralCurveMemberVarying';

    public readonly required: string[] = [ 'IfcStructuralCurveMember', 'IfcStructuralMember', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
