
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccrewresource.htm
 */
export default class IfcCrewResource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCrewResource';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcCrewResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCrewResource';

    public readonly required: string[] = [ 'IfcConstructionResource', 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
