
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMotorConnectionTypeEnum from "./IfcMotorConnectionTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmotorconnectiontype.htm
 */
export default class IfcMotorConnectionType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMotorConnectionType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMotorConnectionTypeSpecification = IfcMotorConnectionTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcMotorConnectionTypeEnum  ) {}
}

export class IfcMotorConnectionTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMotorConnectionType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMotorConnectionTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMotorConnectionTypeSpecification = new IfcMotorConnectionTypeSpecification();
}
