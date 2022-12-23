
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementcomponenttype.htm
 */
export default class IfcElementComponentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElementComponentType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElementComponentTypeSpecification = IfcElementComponentTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcElementComponentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementComponentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementComponentTypeSpecification = new IfcElementComponentTypeSpecification();
}
