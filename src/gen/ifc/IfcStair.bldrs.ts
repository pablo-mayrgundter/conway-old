
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcStairTypeEnum from "./IfcStairTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstair.htm
 */
export default class IfcStair implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStair';

    public readonly __version__: number = 0;

    constructor( public readonly ShapeType : IfcStairTypeEnum  ) {}
}

export class IfcStairSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStair';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ShapeType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStairTypeEnum'
		}
    ];
}
