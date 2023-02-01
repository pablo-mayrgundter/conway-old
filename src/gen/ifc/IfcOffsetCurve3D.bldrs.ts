
import Component from "../../core/component"
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
export default  class IfcOffsetCurve3D extends IfcCurve 
{    
    public readonly specification: IfcOffsetCurve3DSpecification = IfcOffsetCurve3DSpecification.instance;

private BasisCurve_? : IfcCurve
    private Distance_? : IfcLengthMeasure
    private SelfIntersect_? : boolean
    private RefDirection_? : IfcDirection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOffsetCurve3DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOffsetCurve3D';

    public readonly required: ReadonlyArray< string > = [ 'IfcOffsetCurve3D', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

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
			name: 'Distance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: false
		}, 
		{
			name: 'SelfIntersect',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'RefDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOffsetCurve3DSpecification = new IfcOffsetCurve3DSpecification();
}
