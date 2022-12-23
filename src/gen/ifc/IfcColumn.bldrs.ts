
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolumn.htm
 */
export default class IfcColumn implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcColumn';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcColumnSpecification = IfcColumnSpecification.instance;

    constructor(  ) {}
}

export class IfcColumnSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcColumn';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcColumnSpecification = new IfcColumnSpecification();
}
