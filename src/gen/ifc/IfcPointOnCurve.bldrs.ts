
import Component from "../../core/component"
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
export default  class IfcPointOnCurve extends IfcPoint 
{    
    public readonly specification: IfcPointOnCurveSpecification = IfcPointOnCurveSpecification.instance;

private BasisCurve_? : IfcCurve
    private PointParameter_? : IfcParameterValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPointOnCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPointOnCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcPointOnCurve', 'IfcPoint', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

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
			name: 'PointParameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPointOnCurveSpecification = new IfcPointOnCurveSpecification();
}
