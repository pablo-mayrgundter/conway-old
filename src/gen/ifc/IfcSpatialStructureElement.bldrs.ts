
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcElementCompositionEnum} from "./IfcElementCompositionEnum.bldrs"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.bldrs"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings.bldrs"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialstructureelement.htm
 */
export default class IfcSpatialStructureElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSpatialStructureElement';

    public readonly __version__: number = 0;

	LongName? : IfcLabel;
	CompositionType : IfcElementCompositionEnum;

}

export class IfcSpatialStructureElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpatialStructureElement';

    public readonly required: string[] = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LongName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'CompositionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElementCompositionEnum'
		}
    ];
}
