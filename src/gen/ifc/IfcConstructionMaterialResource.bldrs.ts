
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcOrganization} from "./IfcOrganization.bldrs"
import {IfcPerson} from "./IfcPerson.bldrs"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.bldrs"
import {IfcRatioMeasure} from "./IfcRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionmaterialresource.htm
 */
export default class IfcConstructionMaterialResource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConstructionMaterialResource';

    public readonly __version__: number = 0;

	Suppliers? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>;
	UsageRatio? : IfcRatioMeasure;

}

export class IfcConstructionMaterialResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstructionMaterialResource';

    public readonly required: string[] = [ 'IfcConstructionResource', 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Suppliers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>'
		}, 
		{
			name: 'UsageRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure'
		}
    ];
}
