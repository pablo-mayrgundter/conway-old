
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAirToAirHeatRecoveryTypeEnum from "./IfcAirToAirHeatRecoveryTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcairtoairheatrecoverytype.htm
 */
export default class IfcAirToAirHeatRecoveryType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAirToAirHeatRecoveryType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAirToAirHeatRecoveryTypeSpecification = IfcAirToAirHeatRecoveryTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcAirToAirHeatRecoveryTypeEnum  ) {}
}

export class IfcAirToAirHeatRecoveryTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAirToAirHeatRecoveryType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAirToAirHeatRecoveryTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAirToAirHeatRecoveryTypeSpecification = new IfcAirToAirHeatRecoveryTypeSpecification();
}
