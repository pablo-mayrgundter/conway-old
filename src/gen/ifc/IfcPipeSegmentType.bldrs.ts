
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPipeSegmentTypeEnum from "./IfcPipeSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpipesegmenttype.htm
 */
export default class IfcPipeSegmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPipeSegmentType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPipeSegmentTypeSpecification = IfcPipeSegmentTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcPipeSegmentTypeEnum  ) {}
}

export class IfcPipeSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPipeSegmentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPipeSegmentTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPipeSegmentTypeSpecification = new IfcPipeSegmentTypeSpecification();
}
