
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelaggregates.htm
 */
export default class IfcRelAggregates implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAggregates';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAggregatesSpecification = IfcRelAggregatesSpecification.instance;

    constructor(  ) {}
}

export class IfcRelAggregatesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAggregates';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelDecomposes', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAggregatesSpecification = new IfcRelAggregatesSpecification();
}
