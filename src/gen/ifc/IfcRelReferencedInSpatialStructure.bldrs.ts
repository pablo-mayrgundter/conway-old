
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcProduct} from "./IfcProduct.bldrs"
import {IfcSpatialStructureElement} from "./IfcSpatialStructureElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelreferencedinspatialstructure.htm
 */
export default class IfcRelReferencedInSpatialStructure implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelReferencedInSpatialStructure';

    public readonly __version__: number = 0;

	RelatedElements : Array<IfcProduct>;
	RelatingStructure : IfcSpatialStructureElement;

}

export class IfcRelReferencedInSpatialStructureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelReferencedInSpatialStructure';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatedElements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProduct>'
		}, 
		{
			name: 'RelatingStructure',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement'
		}
    ];
}
