
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprojectorder.htm
 */
export default class IfcRelAssignsToProjectOrder implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToProjectOrder';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssignsToProjectOrderSpecification = IfcRelAssignsToProjectOrderSpecification.instance;

    constructor(  ) {}
}

export class IfcRelAssignsToProjectOrderSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToProjectOrder';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToControl', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToProjectOrderSpecification = new IfcRelAssignsToProjectOrderSpecification();
}
