
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSwitchingDeviceTypeEnum from "./IfcSwitchingDeviceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcswitchingdevicetype.htm
 */
export default class IfcSwitchingDeviceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSwitchingDeviceType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSwitchingDeviceTypeSpecification = IfcSwitchingDeviceTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcSwitchingDeviceTypeEnum  ) {}
}

export class IfcSwitchingDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSwitchingDeviceType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSwitchingDeviceTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSwitchingDeviceTypeSpecification = new IfcSwitchingDeviceTypeSpecification();
}
