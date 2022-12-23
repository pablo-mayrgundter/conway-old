
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyledrepresentation.htm
 */
export default class IfcStyledRepresentation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStyledRepresentation';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStyledRepresentationSpecification = IfcStyledRepresentationSpecification.instance;

    constructor(  ) {}
}

export class IfcStyledRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStyledRepresentation';

    public readonly required: ReadonlyArray< string > = [ 'IfcStyleModel', 'IfcRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStyledRepresentationSpecification = new IfcStyledRepresentationSpecification();
}
