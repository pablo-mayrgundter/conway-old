
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis1Placement from "./IfcAxis1Placement.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcLine from "./IfcLine.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolid.htm
 */
export default  class IfcRevolvedAreaSolid extends IfcSweptAreaSolid 
{    
    public readonly specification: IfcRevolvedAreaSolidSpecification = IfcRevolvedAreaSolidSpecification.instance;

private Axis_? : IfcAxis1Placement
    private Angle_? : IfcPlaneAngleMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRevolvedAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRevolvedAreaSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcRevolvedAreaSolid', 'IfcSweptAreaSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Axis',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis1Placement',
			optional: false
		}, 
		{
			name: 'Angle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRevolvedAreaSolidSpecification = new IfcRevolvedAreaSolidSpecification();
}
