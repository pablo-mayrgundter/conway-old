
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelFlowControlElements from "./IfcRelFlowControlElements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionflowelement.htm
 */
export default class IfcDistributionFlowElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionFlowElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionFlowElementSpecification = IfcDistributionFlowElementSpecification.instance;

    constructor(  ) {}
}

export class IfcDistributionFlowElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionFlowElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionFlowElementSpecification = new IfcDistributionFlowElementSpecification();
}
