
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcequipmentstandard.htm
 */
export default class IfcEquipmentStandard implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEquipmentStandard';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEquipmentStandardSpecification = IfcEquipmentStandardSpecification.instance;

    constructor(  ) {}
}

export class IfcEquipmentStandardSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEquipmentStandard';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEquipmentStandardSpecification = new IfcEquipmentStandardSpecification();
}
