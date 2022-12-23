
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTransformerTypeEnum from "./IfcTransformerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctransformertype.htm
 */
export default class IfcTransformerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTransformerType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTransformerTypeSpecification = IfcTransformerTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcTransformerTypeEnum  ) {}
}

export class IfcTransformerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTransformerType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTransformerTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTransformerTypeSpecification = new IfcTransformerTypeSpecification();
}
