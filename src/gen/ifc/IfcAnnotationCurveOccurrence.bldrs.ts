
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationcurveoccurrence.htm
 */
export default class IfcAnnotationCurveOccurrence implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotationCurveOccurrence';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAnnotationCurveOccurrenceSpecification = IfcAnnotationCurveOccurrenceSpecification.instance;

    constructor(  ) {}
}

export class IfcAnnotationCurveOccurrenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationCurveOccurrence';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationCurveOccurrenceSpecification = new IfcAnnotationCurveOccurrenceSpecification();
}
