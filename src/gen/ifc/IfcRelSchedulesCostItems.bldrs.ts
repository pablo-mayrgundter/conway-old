
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelschedulescostitems.htm
 */
export default class IfcRelSchedulesCostItems implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelSchedulesCostItems';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelSchedulesCostItemsSpecification = IfcRelSchedulesCostItemsSpecification.instance;

    constructor(  ) {}
}

export class IfcRelSchedulesCostItemsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelSchedulesCostItems';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToControl', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelSchedulesCostItemsSpecification = new IfcRelSchedulesCostItemsSpecification();
}
