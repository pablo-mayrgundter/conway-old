
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowfittingtype.htm
 */
export default class IfcFlowFittingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowFittingType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowFittingTypeSpecification = IfcFlowFittingTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcFlowFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowFittingType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowFittingTypeSpecification = new IfcFlowFittingTypeSpecification();
}
