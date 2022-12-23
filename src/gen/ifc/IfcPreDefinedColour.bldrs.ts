
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcolour.htm
 */
export default class IfcPreDefinedColour implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedColour';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPreDefinedColourSpecification = IfcPreDefinedColourSpecification.instance;

    constructor(  ) {}
}

export class IfcPreDefinedColourSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedColour';

    public readonly required: ReadonlyArray< string > = [ 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPreDefinedColourSpecification = new IfcPreDefinedColourSpecification();
}
