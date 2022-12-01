
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsystem.htm
 */
export default class IfcSystem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSystem';

    public readonly __version__: number = 0;


}

export class IfcSystemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSystem';

    public readonly required: string[] = [ 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
