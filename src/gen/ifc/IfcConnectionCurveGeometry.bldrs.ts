
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"
import IfcEdgeCurve from "./IfcEdgeCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectioncurvegeometry.htm
 */
export default class IfcConnectionCurveGeometry implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectionCurveGeometry';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcConnectionCurveGeometrySpecification = IfcConnectionCurveGeometrySpecification.instance;

    constructor( public readonly CurveOnRelatingElement : IfcBoundedCurve|IfcEdgeCurve , public readonly CurveOnRelatedElement : IfcBoundedCurve|IfcEdgeCurve  | undefined ) {}
}

export class IfcConnectionCurveGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionCurveGeometry';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CurveOnRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve|IfcEdgeCurve'
		}, 
		{
			name: 'CurveOnRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve|IfcEdgeCurve'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionCurveGeometrySpecification = new IfcConnectionCurveGeometrySpecification();
}
