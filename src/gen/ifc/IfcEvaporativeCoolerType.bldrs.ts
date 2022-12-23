
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEvaporativeCoolerTypeEnum from "./IfcEvaporativeCoolerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevaporativecoolertype.htm
 */
export default class IfcEvaporativeCoolerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEvaporativeCoolerType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEvaporativeCoolerTypeSpecification = IfcEvaporativeCoolerTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcEvaporativeCoolerTypeEnum  ) {}
}

export class IfcEvaporativeCoolerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEvaporativeCoolerType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEvaporativeCoolerTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEvaporativeCoolerTypeSpecification = new IfcEvaporativeCoolerTypeSpecification();
}
