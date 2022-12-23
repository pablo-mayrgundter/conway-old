
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpaceHeaterTypeEnum from "./IfcSpaceHeaterTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspaceheatertype.htm
 */
export default class IfcSpaceHeaterType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSpaceHeaterType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSpaceHeaterTypeSpecification = IfcSpaceHeaterTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcSpaceHeaterTypeEnum  ) {}
}

export class IfcSpaceHeaterTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpaceHeaterType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpaceHeaterTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceHeaterTypeSpecification = new IfcSpaceHeaterTypeSpecification();
}
