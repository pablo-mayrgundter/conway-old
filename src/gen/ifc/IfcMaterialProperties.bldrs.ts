
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialproperties.htm
 */
export default class IfcMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialProperties';

    public readonly __version__: number = 0;

    constructor( public readonly Material : IfcMaterial  ) {}
}

export class IfcMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialProperties';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Material',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial'
		}
    ];
}
