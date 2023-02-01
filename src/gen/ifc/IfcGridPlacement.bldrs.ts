
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVirtualGridIntersection from "./IfcVirtualGridIntersection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridplacement.htm
 */
export default  class IfcGridPlacement extends IfcObjectPlacement 
{    
    public readonly specification: IfcGridPlacementSpecification = IfcGridPlacementSpecification.instance;

private PlacementLocation_? : IfcVirtualGridIntersection
    private PlacementRefDirection_? : IfcVirtualGridIntersection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGridPlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGridPlacement';

    public readonly required: ReadonlyArray< string > = [ 'IfcGridPlacement', 'IfcObjectPlacement' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PlacementLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVirtualGridIntersection',
			optional: false
		}, 
		{
			name: 'PlacementRefDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVirtualGridIntersection',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGridPlacementSpecification = new IfcGridPlacementSpecification();
}
