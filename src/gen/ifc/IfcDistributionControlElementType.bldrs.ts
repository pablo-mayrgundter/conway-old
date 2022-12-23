
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelementtype.htm
 */
export default class IfcDistributionControlElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionControlElementType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionControlElementTypeSpecification = IfcDistributionControlElementTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcDistributionControlElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionControlElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionControlElementTypeSpecification = new IfcDistributionControlElementTypeSpecification();
}
