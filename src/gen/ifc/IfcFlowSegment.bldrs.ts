
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowsegment.htm
 */
export default class IfcFlowSegment implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowSegment';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowSegmentSpecification = IfcFlowSegmentSpecification.instance;

    constructor(  ) {}
}

export class IfcFlowSegmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowSegment';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowSegmentSpecification = new IfcFlowSegmentSpecification();
}
