
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnnotationCurveOccurrence from "./IfcAnnotationCurveOccurrence.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcterminatorsymbol.htm
 */
export default class IfcTerminatorSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTerminatorSymbol';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTerminatorSymbolSpecification = IfcTerminatorSymbolSpecification.instance;

    constructor( public readonly AnnotatedCurve : IfcAnnotationCurveOccurrence  ) {}
}

export class IfcTerminatorSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTerminatorSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationSymbolOccurrence', 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AnnotatedCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnnotationCurveOccurrence'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTerminatorSymbolSpecification = new IfcTerminatorSymbolSpecification();
}
