
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDerivedUnitElement} from "./IfcDerivedUnitElement.bldrs"
import {IfcDerivedUnitEnum} from "./IfcDerivedUnitEnum.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunit.htm
 */
export default class IfcDerivedUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDerivedUnit';

    public readonly __version__: number = 0;

	Elements : Array<IfcDerivedUnitElement>;
	UnitType : IfcDerivedUnitEnum;
	UserDefinedType? : IfcLabel;

}

export class IfcDerivedUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDerivedUnit';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Elements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDerivedUnitElement>'
		}, 
		{
			name: 'UnitType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDerivedUnitEnum'
		}, 
		{
			name: 'UserDefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
