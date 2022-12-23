
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdiscreteaccessory.htm
 */
export default class IfcDiscreteAccessory implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDiscreteAccessory';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDiscreteAccessorySpecification = IfcDiscreteAccessorySpecification.instance;

    constructor(  ) {}
}

export class IfcDiscreteAccessorySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDiscreteAccessory';

    public readonly required: ReadonlyArray< string > = [ 'IfcElementComponent', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDiscreteAccessorySpecification = new IfcDiscreteAccessorySpecification();
}
