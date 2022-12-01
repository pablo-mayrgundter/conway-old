
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofiledef.htm
 */
export default class IfcProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProfileDef';

    public readonly __version__: number = 0;

	ProfileType : IfcProfileTypeEnum;
	ProfileName? : IfcLabel;

}

export class IfcProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProfileDef';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ProfileType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileTypeEnum'
		}, 
		{
			name: 'ProfileName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
