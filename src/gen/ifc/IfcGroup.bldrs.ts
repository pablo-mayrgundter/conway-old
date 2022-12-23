
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelAssignsToGroup from "./IfcRelAssignsToGroup.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgroup.htm
 */
export default class IfcGroup implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGroup';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcGroupSpecification = IfcGroupSpecification.instance;

    constructor(  ) {}
}

export class IfcGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGroup';

    public readonly required: ReadonlyArray< string > = [ 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGroupSpecification = new IfcGroupSpecification();
}
