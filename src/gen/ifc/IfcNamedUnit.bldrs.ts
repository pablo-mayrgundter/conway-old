
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.bldrs"
import {IfcUnitEnum} from "./IfcUnitEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnamedunit.htm
 */
export default class IfcNamedUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcNamedUnit';

    public readonly __version__: number = 0;

	Dimensions : IfcDimensionalExponents;
	UnitType : IfcUnitEnum;

}

export class IfcNamedUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcNamedUnit';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Dimensions',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDimensionalExponents'
		}, 
		{
			name: 'UnitType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcUnitEnum'
		}
    ];
}
