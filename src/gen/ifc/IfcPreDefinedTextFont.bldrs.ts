
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedtextfont.htm
 */
export default class IfcPreDefinedTextFont implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedTextFont';

    public readonly __version__: number = 0;


}

export class IfcPreDefinedTextFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedTextFont';

    public readonly required: string[] = [ 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
