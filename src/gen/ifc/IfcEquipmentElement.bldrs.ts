
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcequipmentelement.htm
 */
export default class IfcEquipmentElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEquipmentElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEquipmentElementSpecification = IfcEquipmentElementSpecification.instance;

    constructor(  ) {}
}

export class IfcEquipmentElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEquipmentElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEquipmentElementSpecification = new IfcEquipmentElementSpecification();
}
