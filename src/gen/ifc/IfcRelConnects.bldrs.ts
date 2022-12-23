
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnects.htm
 */
export default class IfcRelConnects implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnects';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelConnectsSpecification = IfcRelConnectsSpecification.instance;

    constructor(  ) {}
}

export class IfcRelConnectsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnects';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsSpecification = new IfcRelConnectsSpecification();
}
