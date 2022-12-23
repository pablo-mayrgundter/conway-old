
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifczone.htm
 */
export default class IfcZone implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcZone';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcZoneSpecification = IfcZoneSpecification.instance;

    constructor(  ) {}
}

export class IfcZoneSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcZone';

    public readonly required: ReadonlyArray< string > = [ 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcZoneSpecification = new IfcZoneSpecification();
}
