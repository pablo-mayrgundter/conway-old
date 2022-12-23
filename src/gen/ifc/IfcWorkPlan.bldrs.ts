
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkplan.htm
 */
export default class IfcWorkPlan implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWorkPlan';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcWorkPlanSpecification = IfcWorkPlanSpecification.instance;

    constructor(  ) {}
}

export class IfcWorkPlanSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWorkPlan';

    public readonly required: ReadonlyArray< string > = [ 'IfcWorkControl', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWorkPlanSpecification = new IfcWorkPlanSpecification();
}
