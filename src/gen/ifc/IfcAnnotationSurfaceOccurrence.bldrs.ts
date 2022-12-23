
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationsurfaceoccurrence.htm
 */
export default class IfcAnnotationSurfaceOccurrence implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotationSurfaceOccurrence';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAnnotationSurfaceOccurrenceSpecification = IfcAnnotationSurfaceOccurrenceSpecification.instance;

    constructor(  ) {}
}

export class IfcAnnotationSurfaceOccurrenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationSurfaceOccurrence';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationSurfaceOccurrenceSpecification = new IfcAnnotationSurfaceOccurrenceSpecification();
}
