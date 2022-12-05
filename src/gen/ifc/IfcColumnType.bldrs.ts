
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcColumnTypeEnum from "./IfcColumnTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolumntype.htm
 */
export default class IfcColumnType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcColumnType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcColumnTypeEnum  ) {}
}

export class IfcColumnTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcColumnType';

    public readonly required: string[] = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColumnTypeEnum'
		}
    ];
}
