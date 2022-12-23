
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCableCarrierFittingTypeEnum from "./IfcCableCarrierFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablecarrierfittingtype.htm
 */
export default class IfcCableCarrierFittingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCableCarrierFittingType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCableCarrierFittingTypeSpecification = IfcCableCarrierFittingTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcCableCarrierFittingTypeEnum  ) {}
}

export class IfcCableCarrierFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableCarrierFittingType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableCarrierFittingTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCableCarrierFittingTypeSpecification = new IfcCableCarrierFittingTypeSpecification();
}
