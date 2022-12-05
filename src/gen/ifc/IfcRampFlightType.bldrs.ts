
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRampFlightTypeEnum from "./IfcRampFlightTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrampflighttype.htm
 */
export default class IfcRampFlightType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRampFlightType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcRampFlightTypeEnum  ) {}
}

export class IfcRampFlightTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRampFlightType';

    public readonly required: string[] = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRampFlightTypeEnum'
		}
    ];
}
