
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedhatchstyle.htm
 */
export default class IfcExternallyDefinedHatchStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcExternallyDefinedHatchStyle';

    public readonly __version__: number = 0;


}

export class IfcExternallyDefinedHatchStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExternallyDefinedHatchStyle';

    public readonly required: string[] = [ 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
