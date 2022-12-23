
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementcomponent.htm
 */
export default class IfcBuildingElementComponent implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingElementComponent';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBuildingElementComponentSpecification = IfcBuildingElementComponentSpecification.instance;

    constructor(  ) {}
}

export class IfcBuildingElementComponentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElementComponent';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBuildingElementComponentSpecification = new IfcBuildingElementComponentSpecification();
}
