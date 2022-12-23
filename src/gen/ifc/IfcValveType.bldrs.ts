
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcValveTypeEnum from "./IfcValveTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvalvetype.htm
 */
export default class IfcValveType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcValveType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcValveTypeSpecification = IfcValveTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcValveTypeEnum  ) {}
}

export class IfcValveTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcValveType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcValveTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcValveTypeSpecification = new IfcValveTypeSpecification();
}
