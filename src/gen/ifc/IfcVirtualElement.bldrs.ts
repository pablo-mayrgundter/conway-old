
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualelement.htm
 */
export default class IfcVirtualElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVirtualElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcVirtualElementSpecification = IfcVirtualElementSpecification.instance;

    constructor(  ) {}
}

export class IfcVirtualElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVirtualElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVirtualElementSpecification = new IfcVirtualElementSpecification();
}
