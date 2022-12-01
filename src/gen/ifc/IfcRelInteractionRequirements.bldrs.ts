
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCountMeasure} from "./IfcCountMeasure.bldrs"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.bldrs"
import {IfcSpatialStructureElement} from "./IfcSpatialStructureElement.bldrs"
import {IfcSpaceProgram} from "./IfcSpaceProgram.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelinteractionrequirements.htm
 */
export default class IfcRelInteractionRequirements implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelInteractionRequirements';

    public readonly __version__: number = 0;

	DailyInteraction? : IfcCountMeasure;
	ImportanceRating? : IfcNormalisedRatioMeasure;
	LocationOfInteraction? : IfcSpatialStructureElement;
	RelatedSpaceProgram : IfcSpaceProgram;
	RelatingSpaceProgram : IfcSpaceProgram;

}

export class IfcRelInteractionRequirementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelInteractionRequirements';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DailyInteraction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure'
		}, 
		{
			name: 'ImportanceRating',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'LocationOfInteraction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement'
		}, 
		{
			name: 'RelatedSpaceProgram',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpaceProgram'
		}, 
		{
			name: 'RelatingSpaceProgram',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpaceProgram'
		}
    ];
}
