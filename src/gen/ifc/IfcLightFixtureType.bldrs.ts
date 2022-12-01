
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLightFixtureTypeEnum} from "./IfcLightFixtureTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightfixturetype.htm
 */
export default class IfcLightFixtureType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightFixtureType';

    public readonly __version__: number = 0;

	PredefinedType : IfcLightFixtureTypeEnum;

}

export class IfcLightFixtureTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightFixtureType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLightFixtureTypeEnum'
		}
    ];
}
