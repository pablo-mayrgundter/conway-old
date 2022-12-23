
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointoncurve.htm
 */
export default class IfcPointOnCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPointOnCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPointOnCurveSpecification = IfcPointOnCurveSpecification.instance;

    constructor( public readonly BasisCurve : IfcCurve , public readonly PointParameter : IfcParameterValue  ) {}
}

export class IfcPointOnCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPointOnCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcPoint', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BasisCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'PointParameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPointOnCurveSpecification = new IfcPointOnCurveSpecification();
}
