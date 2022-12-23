
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTerminatorSymbol from "./IfcTerminatorSymbol.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensioncurve.htm
 */
export default class IfcDimensionCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDimensionCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDimensionCurveSpecification = IfcDimensionCurveSpecification.instance;

    constructor(  ) {}
}

export class IfcDimensionCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationCurveOccurrence', 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDimensionCurveSpecification = new IfcDimensionCurveSpecification();
}
