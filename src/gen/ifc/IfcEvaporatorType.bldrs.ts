
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEvaporatorTypeEnum from "./IfcEvaporatorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevaporatortype.htm
 */
export default class IfcEvaporatorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEvaporatorType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEvaporatorTypeSpecification = IfcEvaporatorTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcEvaporatorTypeEnum  ) {}
}

export class IfcEvaporatorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEvaporatorType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEvaporatorTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEvaporatorTypeSpecification = new IfcEvaporatorTypeSpecification();
}
