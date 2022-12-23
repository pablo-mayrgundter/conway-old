
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelFillsElement from "./IfcRelFillsElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcopeningelement.htm
 */
export default class IfcOpeningElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOpeningElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcOpeningElementSpecification = IfcOpeningElementSpecification.instance;

    constructor(  ) {}
}

export class IfcOpeningElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOpeningElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcFeatureElementSubtraction', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOpeningElementSpecification = new IfcOpeningElementSpecification();
}
