
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplacement.htm
 */
export default abstract class IfcPlacement extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcPlacementSpecification = IfcPlacementSpecification.instance;

private Location_? : IfcCartesianPoint

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPlacement';

    public readonly required: ReadonlyArray< string > = [ 'IfcPlacement', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Location',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPlacementSpecification = new IfcPlacementSpecification();
}
