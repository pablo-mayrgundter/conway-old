
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLibraryReference} from "./IfcLibraryReference.bldrs"
import {IfcLibraryInformation} from "./IfcLibraryInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociateslibrary.htm
 */
export default class IfcRelAssociatesLibrary implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesLibrary';

    public readonly __version__: number = 0;

	RelatingLibrary : IfcLibraryReference|IfcLibraryInformation;

}

export class IfcRelAssociatesLibrarySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesLibrary';

    public readonly required: string[] = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingLibrary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLibraryReference|IfcLibraryInformation'
		}
    ];
}
