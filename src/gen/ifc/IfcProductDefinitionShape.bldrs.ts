
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProduct from "./IfcProduct.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductdefinitionshape.htm
 */
export default class IfcProductDefinitionShape implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProductDefinitionShape';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProductDefinitionShapeSpecification = IfcProductDefinitionShapeSpecification.instance;

    constructor(  ) {}
}

export class IfcProductDefinitionShapeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProductDefinitionShape';

    public readonly required: ReadonlyArray< string > = [ 'IfcProductRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProductDefinitionShapeSpecification = new IfcProductDefinitionShapeSpecification();
}
