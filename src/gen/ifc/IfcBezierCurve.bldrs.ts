
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbeziercurve.htm
 */
export default class IfcBezierCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBezierCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBezierCurveSpecification = IfcBezierCurveSpecification.instance;

    constructor(  ) {}
}

export class IfcBezierCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBezierCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcBSplineCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBezierCurveSpecification = new IfcBezierCurveSpecification();
}
