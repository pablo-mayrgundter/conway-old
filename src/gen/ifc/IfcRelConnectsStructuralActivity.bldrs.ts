
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcStructuralItem} from "./IfcStructuralItem.bldrs"
import {IfcElement} from "./IfcElement.bldrs"
import {IfcStructuralActivity} from "./IfcStructuralActivity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralactivity.htm
 */
export default class IfcRelConnectsStructuralActivity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsStructuralActivity';

    public readonly __version__: number = 0;

	RelatingElement : IfcStructuralItem|IfcElement;
	RelatedStructuralActivity : IfcStructuralActivity;

}

export class IfcRelConnectsStructuralActivitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsStructuralActivity';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralItem|IfcElement'
		}, 
		{
			name: 'RelatedStructuralActivity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralActivity'
		}
    ];
}
