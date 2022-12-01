
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclosedshell.htm
 */
export default class IfcClosedShell implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClosedShell';

    public readonly __version__: number = 0;


}

export class IfcClosedShellSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClosedShell';

    public readonly required: string[] = [ 'IfcConnectedFaceSet', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
