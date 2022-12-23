
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyline.htm
 */
export default class IfcPolyline implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPolyline';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPolylineSpecification = IfcPolylineSpecification.instance;

    constructor( public readonly Points : Array<IfcCartesianPoint>  ) {}
}

export class IfcPolylineSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPolyline';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Points',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPolylineSpecification = new IfcPolylineSpecification();
}
