
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcFlowDirectionEnum} from "./IfcFlowDirectionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionport.htm
 */
export default class IfcDistributionPort implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionPort';

    public readonly __version__: number = 0;

	FlowDirection? : IfcFlowDirectionEnum;

}

export class IfcDistributionPortSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionPort';

    public readonly required: string[] = [ 'IfcPort', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'FlowDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowDirectionEnum'
		}
    ];
}
