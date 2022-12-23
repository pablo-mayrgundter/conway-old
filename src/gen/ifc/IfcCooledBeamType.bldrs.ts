
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCooledBeamTypeEnum from "./IfcCooledBeamTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccooledbeamtype.htm
 */
export default class IfcCooledBeamType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCooledBeamType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCooledBeamTypeSpecification = IfcCooledBeamTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcCooledBeamTypeEnum  ) {}
}

export class IfcCooledBeamTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCooledBeamType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCooledBeamTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCooledBeamTypeSpecification = new IfcCooledBeamTypeSpecification();
}
