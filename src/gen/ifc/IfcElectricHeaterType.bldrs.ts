
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcElectricHeaterTypeEnum} from "./IfcElectricHeaterTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricheatertype.htm
 */
export default class IfcElectricHeaterType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricHeaterType';

    public readonly __version__: number = 0;

	PredefinedType : IfcElectricHeaterTypeEnum;

}

export class IfcElectricHeaterTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricHeaterType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricHeaterTypeEnum'
		}
    ];
}
