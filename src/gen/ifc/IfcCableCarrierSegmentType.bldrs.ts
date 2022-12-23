
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCableCarrierSegmentTypeEnum from "./IfcCableCarrierSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablecarriersegmenttype.htm
 */
export default class IfcCableCarrierSegmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCableCarrierSegmentType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCableCarrierSegmentTypeSpecification = IfcCableCarrierSegmentTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcCableCarrierSegmentTypeEnum  ) {}
}

export class IfcCableCarrierSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableCarrierSegmentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableCarrierSegmentTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCableCarrierSegmentTypeSpecification = new IfcCableCarrierSegmentTypeSpecification();
}
