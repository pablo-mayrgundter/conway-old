
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowterminaltype.htm
 */
export default class IfcFlowTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowTerminalType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowTerminalTypeSpecification = IfcFlowTerminalTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcFlowTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowTerminalTypeSpecification = new IfcFlowTerminalTypeSpecification();
}
