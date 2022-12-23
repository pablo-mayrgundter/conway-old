
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelProjectsElement from "./IfcRelProjectsElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelementaddition.htm
 */
export default class IfcFeatureElementAddition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFeatureElementAddition';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFeatureElementAdditionSpecification = IfcFeatureElementAdditionSpecification.instance;

    constructor(  ) {}
}

export class IfcFeatureElementAdditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFeatureElementAddition';

    public readonly required: ReadonlyArray< string > = [ 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFeatureElementAdditionSpecification = new IfcFeatureElementAdditionSpecification();
}
