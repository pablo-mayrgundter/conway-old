
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLibraryInformation} from "./IfcLibraryInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryreference.htm
 */
export default class IfcLibraryReference implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLibraryReference';

    public readonly __version__: number = 0;


}

export class IfcLibraryReferenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLibraryReference';

    public readonly required: string[] = [ 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
