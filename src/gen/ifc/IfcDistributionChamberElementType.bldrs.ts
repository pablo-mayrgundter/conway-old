
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDistributionChamberElementTypeEnum from "./IfcDistributionChamberElementTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionchamberelementtype.htm
 */
export default class IfcDistributionChamberElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionChamberElementType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionChamberElementTypeSpecification = IfcDistributionChamberElementTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcDistributionChamberElementTypeEnum  ) {}
}

export class IfcDistributionChamberElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionChamberElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDistributionChamberElementTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionChamberElementTypeSpecification = new IfcDistributionChamberElementTypeSpecification();
}
