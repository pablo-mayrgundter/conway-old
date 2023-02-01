
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpoint.htm
 */
export default  class IfcCartesianPoint extends IfcPoint 
{    
    public readonly specification: IfcCartesianPointSpecification = IfcCartesianPointSpecification.instance;

private Coordinates_? : Array<IfcLengthMeasure>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCartesianPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianPoint';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianPoint', 'IfcPoint', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Coordinates',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLengthMeasure>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianPointSpecification = new IfcCartesianPointSpecification();
}
