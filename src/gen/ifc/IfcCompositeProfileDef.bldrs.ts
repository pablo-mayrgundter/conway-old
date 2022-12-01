
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcProfileDef} from "./IfcProfileDef.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositeprofiledef.htm
 */
export default class IfcCompositeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCompositeProfileDef';

    public readonly __version__: number = 0;

	Profiles : Array<IfcProfileDef>;
	Label? : IfcLabel;

}

export class IfcCompositeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompositeProfileDef';

    public readonly required: string[] = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Profiles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProfileDef>'
		}, 
		{
			name: 'Label',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
