
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve2d.htm
 */
export default  class IfcOffsetCurve2D extends IfcCurve 
{    
    public readonly specification: IfcOffsetCurve2DSpecification = IfcOffsetCurve2DSpecification.instance;

private BasisCurve_? : IfcCurve
    private Distance_? : IfcLengthMeasure
    private SelfIntersect_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOffsetCurve2DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOffsetCurve2D';

    public readonly required: ReadonlyArray< string > = [ 'IfcOffsetCurve2D', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

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
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOffsetCurve2DSpecification = new IfcOffsetCurve2DSpecification();
}
