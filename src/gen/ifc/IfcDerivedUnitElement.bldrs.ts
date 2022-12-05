
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunitelement.htm
 */
export default class IfcDerivedUnitElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDerivedUnitElement';

    public readonly __version__: number = 0;

    constructor( public readonly Unit : IfcNamedUnit , public readonly Exponent : number  ) {}
}

export class IfcDerivedUnitElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDerivedUnitElement';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Unit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNamedUnit'
		}, 
		{
			name: 'Exponent',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}
    ];
}
