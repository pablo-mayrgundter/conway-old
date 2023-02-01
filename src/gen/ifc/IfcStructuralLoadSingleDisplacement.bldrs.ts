
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacement.htm
 */
export default  class IfcStructuralLoadSingleDisplacement extends IfcStructuralLoadStatic 
{    
    public readonly specification: IfcStructuralLoadSingleDisplacementSpecification = IfcStructuralLoadSingleDisplacementSpecification.instance;

private DisplacementX_? : IfcLengthMeasure
    private DisplacementY_? : IfcLengthMeasure
    private DisplacementZ_? : IfcLengthMeasure
    private RotationalDisplacementRX_? : IfcPlaneAngleMeasure
    private RotationalDisplacementRY_? : IfcPlaneAngleMeasure
    private RotationalDisplacementRZ_? : IfcPlaneAngleMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadSingleDisplacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleDisplacement';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadSingleDisplacement', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DisplacementX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'DisplacementY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'DisplacementZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'RotationalDisplacementRX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'RotationalDisplacementRY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'RotationalDisplacementRZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadSingleDisplacementSpecification = new IfcStructuralLoadSingleDisplacementSpecification();
}
