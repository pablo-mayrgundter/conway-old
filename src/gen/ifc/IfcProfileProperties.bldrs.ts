
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcProfileDef} from "./IfcProfileDef.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofileproperties.htm
 */
export default class IfcProfileProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProfileProperties';

    public readonly __version__: number = 0;

	ProfileName? : IfcLabel;
	ProfileDefinition? : IfcProfileDef;

}

export class IfcProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProfileProperties';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ProfileName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ProfileDefinition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}
    ];
}
