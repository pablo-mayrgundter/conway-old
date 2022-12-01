
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcequipmentstandard.htm
 */
export default class IfcEquipmentStandard implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEquipmentStandard';

    public readonly __version__: number = 0;


}

export class IfcEquipmentStandardSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEquipmentStandard';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
