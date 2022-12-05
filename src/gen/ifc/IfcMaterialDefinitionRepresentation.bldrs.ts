
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinitionrepresentation.htm
 */
export default class IfcMaterialDefinitionRepresentation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialDefinitionRepresentation';

    public readonly __version__: number = 0;

    constructor( public readonly RepresentedMaterial : IfcMaterial  ) {}
}

export class IfcMaterialDefinitionRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialDefinitionRepresentation';

    public readonly required: string[] = [ 'IfcProductRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RepresentedMaterial',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial'
		}
    ];
}
