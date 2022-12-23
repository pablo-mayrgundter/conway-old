
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclosedshell.htm
 */
export default class IfcClosedShell implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClosedShell';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcClosedShellSpecification = IfcClosedShellSpecification.instance;

    constructor(  ) {}
}

export class IfcClosedShellSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClosedShell';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectedFaceSet', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClosedShellSpecification = new IfcClosedShellSpecification();
}
