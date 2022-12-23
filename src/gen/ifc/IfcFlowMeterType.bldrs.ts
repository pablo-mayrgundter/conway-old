
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFlowMeterTypeEnum from "./IfcFlowMeterTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowmetertype.htm
 */
export default class IfcFlowMeterType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowMeterType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowMeterTypeSpecification = IfcFlowMeterTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcFlowMeterTypeEnum  ) {}
}

export class IfcFlowMeterTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowMeterType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowMeterTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowMeterTypeSpecification = new IfcFlowMeterTypeSpecification();
}
