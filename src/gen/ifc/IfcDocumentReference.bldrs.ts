
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentreference.htm
 */
export default class IfcDocumentReference implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDocumentReference';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcDocumentReferenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDocumentReference';

    public readonly required: string[] = [ 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
