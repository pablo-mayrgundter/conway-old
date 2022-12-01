
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedtextfont.htm
 */
export default class IfcDraughtingPreDefinedTextFont implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDraughtingPreDefinedTextFont';

    public readonly __version__: number = 0;


}

export class IfcDraughtingPreDefinedTextFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingPreDefinedTextFont';

    public readonly required: string[] = [ 'IfcPreDefinedTextFont', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
