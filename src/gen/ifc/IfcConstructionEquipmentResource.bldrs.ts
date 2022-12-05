
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionequipmentresource.htm
 */
export default class IfcConstructionEquipmentResource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConstructionEquipmentResource';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcConstructionEquipmentResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstructionEquipmentResource';

    public readonly required: string[] = [ 'IfcConstructionResource', 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
