
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcObjectPlacement} from "./IfcObjectPlacement.bldrs"
import {IfcProductRepresentation} from "./IfcProductRepresentation.bldrs"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproduct.htm
 */
export default class IfcProduct implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProduct';

    public readonly __version__: number = 0;

	ObjectPlacement? : IfcObjectPlacement;
	Representation? : IfcProductRepresentation;

}

export class IfcProductSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProduct';

    public readonly required: string[] = [ 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ObjectPlacement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectPlacement'
		}, 
		{
			name: 'Representation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProductRepresentation'
		}
    ];
}
