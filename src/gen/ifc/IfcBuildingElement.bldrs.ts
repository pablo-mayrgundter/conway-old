
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelement.htm
 */
export default class IfcBuildingElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBuildingElementSpecification = IfcBuildingElementSpecification.instance;

    constructor(  ) {}
}

export class IfcBuildingElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBuildingElementSpecification = new IfcBuildingElementSpecification();
}
