
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRailingTypeEnum from "./IfcRailingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrailing.htm
 */
export default class IfcRailing implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRailing';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcRailingTypeEnum  | undefined ) {}
}

export class IfcRailingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRailing';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRailingTypeEnum'
		}
    ];
}
