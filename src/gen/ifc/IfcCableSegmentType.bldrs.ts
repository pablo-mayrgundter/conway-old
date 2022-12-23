
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCableSegmentTypeEnum from "./IfcCableSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablesegmenttype.htm
 */
export default class IfcCableSegmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCableSegmentType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCableSegmentTypeSpecification = IfcCableSegmentTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcCableSegmentTypeEnum  ) {}
}

export class IfcCableSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableSegmentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableSegmentTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCableSegmentTypeSpecification = new IfcCableSegmentTypeSpecification();
}
