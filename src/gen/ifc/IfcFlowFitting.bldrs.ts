
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowfitting.htm
 */
export default class IfcFlowFitting implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowFitting';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowFittingSpecification = IfcFlowFittingSpecification.instance;

    constructor(  ) {}
}

export class IfcFlowFittingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowFitting';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowFittingSpecification = new IfcFlowFittingSpecification();
}
