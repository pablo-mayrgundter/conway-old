
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfaceconnection.htm
 */
export default class IfcStructuralSurfaceConnection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralSurfaceConnection';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralSurfaceConnectionSpecification = IfcStructuralSurfaceConnectionSpecification.instance;

    constructor(  ) {}
}

export class IfcStructuralSurfaceConnectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralSurfaceConnection';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralConnection', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralSurfaceConnectionSpecification = new IfcStructuralSurfaceConnectionSpecification();
}
