
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurtainWallTypeEnum from "./IfcCurtainWallTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurtainwalltype.htm
 */
export default class IfcCurtainWallType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurtainWallType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCurtainWallTypeSpecification = IfcCurtainWallTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcCurtainWallTypeEnum  ) {}
}

export class IfcCurtainWallTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurtainWallType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurtainWallTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurtainWallTypeSpecification = new IfcCurtainWallTypeSpecification();
}
