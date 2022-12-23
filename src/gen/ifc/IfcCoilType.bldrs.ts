
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCoilTypeEnum from "./IfcCoilTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoiltype.htm
 */
export default class IfcCoilType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCoilType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCoilTypeSpecification = IfcCoilTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcCoilTypeEnum  ) {}
}

export class IfcCoilTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCoilType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCoilTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCoilTypeSpecification = new IfcCoilTypeSpecification();
}
