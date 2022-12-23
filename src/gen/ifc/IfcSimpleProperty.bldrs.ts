
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimpleproperty.htm
 */
export default class IfcSimpleProperty implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSimpleProperty';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSimplePropertySpecification = IfcSimplePropertySpecification.instance;

    constructor(  ) {}
}

export class IfcSimplePropertySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSimpleProperty';

    public readonly required: ReadonlyArray< string > = [ 'IfcProperty' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSimplePropertySpecification = new IfcSimplePropertySpecification();
}
