
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralpointaction.htm
 */
export default class IfcStructuralPointAction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralPointAction';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralPointActionSpecification = IfcStructuralPointActionSpecification.instance;

    constructor(  ) {}
}

export class IfcStructuralPointActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralPointAction';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralPointActionSpecification = new IfcStructuralPointActionSpecification();
}
