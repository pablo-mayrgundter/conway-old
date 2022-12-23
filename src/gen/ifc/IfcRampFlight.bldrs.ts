
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrampflight.htm
 */
export default class IfcRampFlight implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRampFlight';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRampFlightSpecification = IfcRampFlightSpecification.instance;

    constructor(  ) {}
}

export class IfcRampFlightSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRampFlight';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRampFlightSpecification = new IfcRampFlightSpecification();
}
