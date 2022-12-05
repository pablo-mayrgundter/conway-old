
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcTransportElementTypeEnum from "./IfcTransportElementTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctransportelementtype.htm
 */
export default class IfcTransportElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTransportElementType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcTransportElementTypeEnum  ) {}
}

export class IfcTransportElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTransportElementType';

    public readonly required: string[] = [ 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTransportElementTypeEnum'
		}
    ];
}
