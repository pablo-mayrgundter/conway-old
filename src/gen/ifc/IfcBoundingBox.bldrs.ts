
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundingbox.htm
 */
export default  class IfcBoundingBox extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcBoundingBoxSpecification = IfcBoundingBoxSpecification.instance;

private Corner_? : IfcCartesianPoint
    private XDim_? : IfcPositiveLengthMeasure
    private YDim_? : IfcPositiveLengthMeasure
    private ZDim_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBoundingBoxSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundingBox';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundingBox', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Corner',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint',
			optional: false
		}, 
		{
			name: 'XDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'YDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'ZDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBoundingBoxSpecification = new IfcBoundingBoxSpecification();
}
