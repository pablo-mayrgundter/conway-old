
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcClassificationNotation} from "./IfcClassificationNotation.bldrs"
import {IfcClassificationReference} from "./IfcClassificationReference.bldrs"
import {IfcMaterial} from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialclassificationrelationship.htm
 */
export default class IfcMaterialClassificationRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialClassificationRelationship';

    public readonly __version__: number = 0;

	MaterialClassifications : Array<IfcClassificationNotation|IfcClassificationReference>;
	ClassifiedMaterial : IfcMaterial;

}

export class IfcMaterialClassificationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialClassificationRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'MaterialClassifications',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationNotation|IfcClassificationReference>'
		}, 
		{
			name: 'ClassifiedMaterial',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial'
		}
    ];
}
