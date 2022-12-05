
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcSectionTypeEnum from "./IfcSectionTypeEnum.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionproperties.htm
 */
export default class IfcSectionProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSectionProperties';

    public readonly __version__: number = 0;

    constructor( public readonly SectionType : IfcSectionTypeEnum , public readonly StartProfile : IfcProfileDef , public readonly EndProfile : IfcProfileDef  | undefined ) {}
}

export class IfcSectionPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSectionProperties';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionTypeEnum'
		}, 
		{
			name: 'StartProfile',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}, 
		{
			name: 'EndProfile',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}
    ];
}
