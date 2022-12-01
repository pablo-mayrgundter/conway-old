
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSlabTypeEnum} from "./IfcSlabTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslab.htm
 */
export default class IfcSlab implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSlab';

    public readonly __version__: number = 0;

	PredefinedType? : IfcSlabTypeEnum;

}

export class IfcSlabSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSlab';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSlabTypeEnum'
		}
    ];
}
