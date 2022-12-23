
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationtextoccurrence.htm
 */
export default class IfcAnnotationTextOccurrence implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotationTextOccurrence';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAnnotationTextOccurrenceSpecification = IfcAnnotationTextOccurrenceSpecification.instance;

    constructor(  ) {}
}

export class IfcAnnotationTextOccurrenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationTextOccurrence';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationTextOccurrenceSpecification = new IfcAnnotationTextOccurrenceSpecification();
}
