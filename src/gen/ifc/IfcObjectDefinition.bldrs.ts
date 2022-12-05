
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRelAssigns from "./IfcRelAssigns.bldrs"
import IfcRelDecomposes from "./IfcRelDecomposes.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectdefinition.htm
 */
export default class IfcObjectDefinition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcObjectDefinition';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcObjectDefinitionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcObjectDefinition';

    public readonly required: string[] = [ 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
