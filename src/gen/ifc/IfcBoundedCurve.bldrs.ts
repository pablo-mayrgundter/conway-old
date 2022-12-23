
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedcurve.htm
 */
export default class IfcBoundedCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundedCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBoundedCurveSpecification = IfcBoundedCurveSpecification.instance;

    constructor(  ) {}
}

export class IfcBoundedCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundedCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBoundedCurveSpecification = new IfcBoundedCurveSpecification();
}
