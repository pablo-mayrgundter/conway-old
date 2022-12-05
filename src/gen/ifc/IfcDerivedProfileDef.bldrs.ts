
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedprofiledef.htm
 */
export default class IfcDerivedProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDerivedProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly ParentProfile : IfcProfileDef , public readonly Operator : IfcCartesianTransformationOperator2D , public readonly Label : IfcLabel  | undefined ) {}
}

export class IfcDerivedProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDerivedProfileDef';

    public readonly required: string[] = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ParentProfile',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}, 
		{
			name: 'Operator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator2D'
		}, 
		{
			name: 'Label',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
