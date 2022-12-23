
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowterminal.htm
 */
export default class IfcFlowTerminal implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowTerminal';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowTerminalSpecification = IfcFlowTerminalSpecification.instance;

    constructor(  ) {}
}

export class IfcFlowTerminalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowTerminal';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowTerminalSpecification = new IfcFlowTerminalSpecification();
}
