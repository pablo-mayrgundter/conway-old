
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCompositeCurveSegment from "./IfcCompositeCurveSegment.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurve.htm
 */
export default class IfcCompositeCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCompositeCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCompositeCurveSpecification = IfcCompositeCurveSpecification.instance;

    constructor( public readonly Segments : Array<IfcCompositeCurveSegment> , public readonly SelfIntersect : boolean  ) {}
}

export class IfcCompositeCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompositeCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Segments',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCompositeCurveSegment>'
		}, 
		{
			name: 'SelfIntersect',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCompositeCurveSpecification = new IfcCompositeCurveSpecification();
}
