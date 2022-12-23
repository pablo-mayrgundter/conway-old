
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDuctSegmentTypeEnum from "./IfcDuctSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcductsegmenttype.htm
 */
export default class IfcDuctSegmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDuctSegmentType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDuctSegmentTypeSpecification = IfcDuctSegmentTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcDuctSegmentTypeEnum  ) {}
}

export class IfcDuctSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDuctSegmentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDuctSegmentTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDuctSegmentTypeSpecification = new IfcDuctSegmentTypeSpecification();
}
