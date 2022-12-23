
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcHumidifierTypeEnum from "./IfcHumidifierTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchumidifiertype.htm
 */
export default class IfcHumidifierType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcHumidifierType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcHumidifierTypeSpecification = IfcHumidifierTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcHumidifierTypeEnum  ) {}
}

export class IfcHumidifierTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcHumidifierType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHumidifierTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcHumidifierTypeSpecification = new IfcHumidifierTypeSpecification();
}
