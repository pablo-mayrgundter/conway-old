
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvector.htm
 */
export default  class IfcVector extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcVectorSpecification = IfcVectorSpecification.instance;

private Orientation_? : IfcDirection
    private Magnitude_? : IfcLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcVectorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVector';

    public readonly required: ReadonlyArray< string > = [ 'IfcVector', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: false
		}, 
		{
			name: 'Magnitude',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVectorSpecification = new IfcVectorSpecification();
}
