
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcMaterialDefinitionRepresentation from "./IfcMaterialDefinitionRepresentation.bldrs"
import IfcMaterialClassificationRelationship from "./IfcMaterialClassificationRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterial.htm
 */
export default class IfcMaterial implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterial';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel  ) {}
}

export class IfcMaterialSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterial';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
