
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCurrencyEnum from "./IfcCurrencyEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonetaryunit.htm
 */
export default class IfcMonetaryUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMonetaryUnit';

    public readonly __version__: number = 0;

    constructor( public readonly Currency : IfcCurrencyEnum  ) {}
}

export class IfcMonetaryUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMonetaryUnit';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Currency',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurrencyEnum'
		}
    ];
}
