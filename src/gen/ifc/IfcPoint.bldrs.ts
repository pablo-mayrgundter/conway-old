
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpoint.htm
 */
export default class IfcPoint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPoint';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPointSpecification = IfcPointSpecification.instance;

    constructor(  ) {}
}

export class IfcPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPoint';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPointSpecification = new IfcPointSpecification();
}
