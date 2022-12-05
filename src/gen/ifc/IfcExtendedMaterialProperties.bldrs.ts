
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcProperty from "./IfcProperty.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextendedmaterialproperties.htm
 */
export default class IfcExtendedMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcExtendedMaterialProperties';

    public readonly __version__: number = 0;

    constructor( public readonly ExtendedProperties : Array<IfcProperty> , public readonly Description : IfcText  | undefined, public readonly Name : IfcLabel  ) {}
}

export class IfcExtendedMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExtendedMaterialProperties';

    public readonly required: string[] = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ExtendedProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
