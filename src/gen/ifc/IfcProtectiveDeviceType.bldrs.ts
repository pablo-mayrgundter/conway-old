
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProtectiveDeviceTypeEnum from "./IfcProtectiveDeviceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprotectivedevicetype.htm
 */
export default class IfcProtectiveDeviceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProtectiveDeviceType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProtectiveDeviceTypeSpecification = IfcProtectiveDeviceTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcProtectiveDeviceTypeEnum  ) {}
}

export class IfcProtectiveDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProtectiveDeviceType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProtectiveDeviceTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProtectiveDeviceTypeSpecification = new IfcProtectiveDeviceTypeSpecification();
}
