
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDuctFittingTypeEnum from "./IfcDuctFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcductfittingtype.htm
 */
export default class IfcDuctFittingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDuctFittingType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDuctFittingTypeSpecification = IfcDuctFittingTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcDuctFittingTypeEnum  ) {}
}

export class IfcDuctFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDuctFittingType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDuctFittingTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDuctFittingTypeSpecification = new IfcDuctFittingTypeSpecification();
}
