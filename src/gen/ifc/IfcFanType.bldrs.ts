
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFanTypeEnum from "./IfcFanTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfantype.htm
 */
export default class IfcFanType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFanType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFanTypeSpecification = IfcFanTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcFanTypeEnum  ) {}
}

export class IfcFanTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFanType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowMovingDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFanTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFanTypeSpecification = new IfcFanTypeSpecification();
}
