
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcolour.htm
 */
export default class IfcDraughtingPreDefinedColour implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDraughtingPreDefinedColour';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDraughtingPreDefinedColourSpecification = IfcDraughtingPreDefinedColourSpecification.instance;

    constructor(  ) {}
}

export class IfcDraughtingPreDefinedColourSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingPreDefinedColour';

    public readonly required: ReadonlyArray< string > = [ 'IfcPreDefinedColour', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDraughtingPreDefinedColourSpecification = new IfcDraughtingPreDefinedColourSpecification();
}
