
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgecurve.htm
 */
export default class IfcEdgeCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEdgeCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEdgeCurveSpecification = IfcEdgeCurveSpecification.instance;

    constructor( public readonly EdgeGeometry : IfcCurve , public readonly SameSense : boolean  ) {}
}

export class IfcEdgeCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEdgeCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcEdge', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EdgeGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'SameSense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEdgeCurveSpecification = new IfcEdgeCurveSpecification();
}
