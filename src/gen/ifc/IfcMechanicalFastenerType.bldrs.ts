
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastenertype.htm
 */
export default class IfcMechanicalFastenerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMechanicalFastenerType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMechanicalFastenerTypeSpecification = IfcMechanicalFastenerTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcMechanicalFastenerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalFastenerType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFastenerType', 'IfcElementComponentType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMechanicalFastenerTypeSpecification = new IfcMechanicalFastenerTypeSpecification();
}
