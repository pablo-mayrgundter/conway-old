
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRelDefinesByProperties from "./IfcRelDefinesByProperties.bldrs"
import IfcTypeObject from "./IfcTypeObject.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinition.htm
 */
export default class IfcPropertySetDefinition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPropertySetDefinition';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcPropertySetDefinitionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertySetDefinition';

    public readonly required: string[] = [ 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
