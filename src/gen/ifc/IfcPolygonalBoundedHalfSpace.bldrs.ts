
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalboundedhalfspace.htm
 */
export default class IfcPolygonalBoundedHalfSpace implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPolygonalBoundedHalfSpace';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPolygonalBoundedHalfSpaceSpecification = IfcPolygonalBoundedHalfSpaceSpecification.instance;

    constructor( public readonly Position : IfcAxis2Placement3D , public readonly PolygonalBoundary : IfcBoundedCurve  ) {}
}

export class IfcPolygonalBoundedHalfSpaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPolygonalBoundedHalfSpace';

    public readonly required: ReadonlyArray< string > = [ 'IfcHalfSpaceSolid', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}, 
		{
			name: 'PolygonalBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPolygonalBoundedHalfSpaceSpecification = new IfcPolygonalBoundedHalfSpaceSpecification();
}
