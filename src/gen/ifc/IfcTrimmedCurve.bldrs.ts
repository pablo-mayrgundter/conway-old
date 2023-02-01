
import Component from "../../core/component"
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
export default  class IfcTrimmedCurve extends IfcBoundedCurve 
{    
    public readonly specification: IfcTrimmedCurveSpecification = IfcTrimmedCurveSpecification.instance;

private BasisCurve_? : IfcCurve
    private Trim1_? : Array<IfcCartesianPoint|IfcParameterValue>
    private Trim2_? : Array<IfcCartesianPoint|IfcParameterValue>
    private SenseAgreement_? : boolean
    private MasterRepresentation_? : IfcTrimmingPreference

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTrimmedCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTrimmedCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcTrimmedCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BasisCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}, 
		{
			name: 'Trim1',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint|IfcParameterValue>',
			optional: false
		}, 
		{
			name: 'Trim2',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint|IfcParameterValue>',
			optional: false
		}, 
		{
			name: 'SenseAgreement',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'MasterRepresentation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTrimmingPreference',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTrimmedCurveSpecification = new IfcTrimmedCurveSpecification();
}
