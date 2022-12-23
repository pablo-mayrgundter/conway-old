
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOutletTypeEnum from "./IfcOutletTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoutlettype.htm
 */
export default class IfcOutletType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOutletType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcOutletTypeSpecification = IfcOutletTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcOutletTypeEnum  ) {}
}

export class IfcOutletTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOutletType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOutletTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOutletTypeSpecification = new IfcOutletTypeSpecification();
}
