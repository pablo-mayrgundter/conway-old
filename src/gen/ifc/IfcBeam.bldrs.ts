
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbeam.htm
 */
export default class IfcBeam implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBeam';

    public readonly __version__: number = 0;


}

export class IfcBeamSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBeam';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
