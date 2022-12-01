
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcStructuralLoad} from "./IfcStructuralLoad.bldrs"
import {IfcGlobalOrLocalEnum} from "./IfcGlobalOrLocalEnum.bldrs"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralactivity.htm
 */
export default class IfcStructuralActivity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralActivity';

    public readonly __version__: number = 0;

	AppliedLoad : IfcStructuralLoad;
	GlobalOrLocal : IfcGlobalOrLocalEnum;

}

export class IfcStructuralActivitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralActivity';

    public readonly required: string[] = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'AppliedLoad',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralLoad'
		}, 
		{
			name: 'GlobalOrLocal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGlobalOrLocalEnum'
		}
    ];
}
