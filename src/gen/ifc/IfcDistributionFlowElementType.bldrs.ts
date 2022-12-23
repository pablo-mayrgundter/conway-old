
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionflowelementtype.htm
 */
export default class IfcDistributionFlowElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionFlowElementType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionFlowElementTypeSpecification = IfcDistributionFlowElementTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcDistributionFlowElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionFlowElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionFlowElementTypeSpecification = new IfcDistributionFlowElementTypeSpecification();
}
