
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcShapeModel} from "./IfcShapeModel.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcText} from "./IfcText.bldrs"
import {IfcProductDefinitionShape} from "./IfcProductDefinitionShape.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapeaspect.htm
 */
export default class IfcShapeAspect implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcShapeAspect';

    public readonly __version__: number = 0;

	ShapeRepresentations : Array<IfcShapeModel>;
	Name? : IfcLabel;
	Description? : IfcText;
	ProductDefinitional : boolean;
	PartOfProductDefinitionShape : IfcProductDefinitionShape;

}

export class IfcShapeAspectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcShapeAspect';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ShapeRepresentations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcShapeModel>'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'ProductDefinitional',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'PartOfProductDefinitionShape',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProductDefinitionShape'
		}
    ];
}
