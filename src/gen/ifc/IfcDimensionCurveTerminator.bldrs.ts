
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDimensionExtentUsage from "./IfcDimensionExtentUsage.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensioncurveterminator.htm
 */
export default class IfcDimensionCurveTerminator implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDimensionCurveTerminator';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDimensionCurveTerminatorSpecification = IfcDimensionCurveTerminatorSpecification.instance;

    constructor( public readonly Role : IfcDimensionExtentUsage  ) {}
}

export class IfcDimensionCurveTerminatorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionCurveTerminator';

    public readonly required: ReadonlyArray< string > = [ 'IfcTerminatorSymbol', 'IfcAnnotationSymbolOccurrence', 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Role',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDimensionExtentUsage'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDimensionCurveTerminatorSpecification = new IfcDimensionCurveTerminatorSpecification();
}
