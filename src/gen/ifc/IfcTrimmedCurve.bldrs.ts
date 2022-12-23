
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcTrimmingPreference from "./IfcTrimmingPreference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrimmedcurve.htm
 */
export default class IfcTrimmedCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTrimmedCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTrimmedCurveSpecification = IfcTrimmedCurveSpecification.instance;

    constructor( public readonly BasisCurve : IfcCurve , public readonly Trim1 : Array<IfcCartesianPoint|IfcParameterValue> , public readonly Trim2 : Array<IfcCartesianPoint|IfcParameterValue> , public readonly SenseAgreement : boolean , public readonly MasterRepresentation : IfcTrimmingPreference  ) {}
}

export class IfcTrimmedCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTrimmedCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

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
			name: 'Trim1',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint|IfcParameterValue>'
		}, 
		{
			name: 'Trim2',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint|IfcParameterValue>'
		}, 
		{
			name: 'SenseAgreement',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'MasterRepresentation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTrimmingPreference'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTrimmedCurveSpecification = new IfcTrimmedCurveSpecification();
}
