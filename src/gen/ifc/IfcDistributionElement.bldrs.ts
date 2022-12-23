
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionelement.htm
 */
export default class IfcDistributionElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionElementSpecification = IfcDistributionElementSpecification.instance;

    constructor(  ) {}
}

export class IfcDistributionElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionElementSpecification = new IfcDistributionElementSpecification();
}
