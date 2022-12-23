
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve3d.htm
 */
export default class IfcOffsetCurve3D implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOffsetCurve3D';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcOffsetCurve3DSpecification = IfcOffsetCurve3DSpecification.instance;

    constructor( public readonly BasisCurve : IfcCurve , public readonly Distance : IfcLengthMeasure , public readonly SelfIntersect : boolean , public readonly RefDirection : IfcDirection  ) {}
}

export class IfcOffsetCurve3DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOffsetCurve3D';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

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
			name: 'Distance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'SelfIntersect',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'RefDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOffsetCurve3DSpecification = new IfcOffsetCurve3DSpecification();
}
