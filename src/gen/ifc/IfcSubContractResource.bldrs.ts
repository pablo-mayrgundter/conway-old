
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsubcontractresource.htm
 */
export default class IfcSubContractResource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSubContractResource';

    public readonly __version__: number = 0;

    constructor( public readonly SubContractor : IfcOrganization|IfcPerson|IfcPersonAndOrganization  | undefined, public readonly JobDescription : IfcText  | undefined ) {}
}

export class IfcSubContractResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSubContractResource';

    public readonly required: string[] = [ 'IfcConstructionResource', 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SubContractor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'JobDescription',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
