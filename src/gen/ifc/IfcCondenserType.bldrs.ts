
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCondenserTypeEnum from "./IfcCondenserTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccondensertype.htm
 */
export default class IfcCondenserType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCondenserType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCondenserTypeSpecification = IfcCondenserTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcCondenserTypeEnum  ) {}
}

export class IfcCondenserTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCondenserType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCondenserTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCondenserTypeSpecification = new IfcCondenserTypeSpecification();
}
