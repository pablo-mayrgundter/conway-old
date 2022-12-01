
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.bldrs"
import {IfcElement} from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectselements.htm
 */
export default class IfcRelConnectsElements implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsElements';

    public readonly __version__: number = 0;

	ConnectionGeometry? : IfcConnectionGeometry;
	RelatingElement : IfcElement;
	RelatedElement : IfcElement;

}

export class IfcRelConnectsElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsElements';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ConnectionGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionGeometry'
		}, 
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'RelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}
    ];
}
