
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBuildingElementProxyTypeEnum from "./IfcBuildingElementProxyTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementproxytype.htm
 */
export default class IfcBuildingElementProxyType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingElementProxyType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBuildingElementProxyTypeSpecification = IfcBuildingElementProxyTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcBuildingElementProxyTypeEnum  ) {}
}

export class IfcBuildingElementProxyTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElementProxyType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBuildingElementProxyTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBuildingElementProxyTypeSpecification = new IfcBuildingElementProxyTypeSpecification();
}
