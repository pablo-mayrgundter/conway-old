
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionelementtype.htm
 */
export default class IfcDistributionElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionElementType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionElementTypeSpecification = IfcDistributionElementTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcDistributionElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionElementTypeSpecification = new IfcDistributionElementTypeSpecification();
}
