
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRelConnectsPortToElement from "./IfcRelConnectsPortToElement.bldrs"
import IfcRelConnectsPorts from "./IfcRelConnectsPorts.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcport.htm
 */
export default class IfcPort implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPort';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcPortSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPort';

    public readonly required: string[] = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
