
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifc2dcompositecurve.htm
 */
export default class Ifc2DCompositeCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'Ifc2DCompositeCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: Ifc2DCompositeCurveSpecification = Ifc2DCompositeCurveSpecification.instance;

    constructor(  ) {}
}

export class Ifc2DCompositeCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'Ifc2DCompositeCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcCompositeCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: Ifc2DCompositeCurveSpecification = new Ifc2DCompositeCurveSpecification();
}
