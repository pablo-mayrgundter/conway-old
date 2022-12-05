
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCurtainWallTypeEnum from "./IfcCurtainWallTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurtainwalltype.htm
 */
export default class IfcCurtainWallType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurtainWallType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcCurtainWallTypeEnum  ) {}
}

export class IfcCurtainWallTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurtainWallType';

    public readonly required: string[] = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurtainWallTypeEnum'
		}
    ];
}
