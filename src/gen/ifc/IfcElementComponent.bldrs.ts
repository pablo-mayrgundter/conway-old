
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementcomponent.htm
 */
export default class IfcElementComponent implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElementComponent';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElementComponentSpecification = IfcElementComponentSpecification.instance;

    constructor(  ) {}
}

export class IfcElementComponentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementComponent';

    public readonly required: ReadonlyArray< string > = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementComponentSpecification = new IfcElementComponentSpecification();
}
