
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralpointconnection.htm
 */
export default class IfcStructuralPointConnection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralPointConnection';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralPointConnectionSpecification = IfcStructuralPointConnectionSpecification.instance;

    constructor(  ) {}
}

export class IfcStructuralPointConnectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralPointConnection';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralConnection', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralPointConnectionSpecification = new IfcStructuralPointConnectionSpecification();
}
