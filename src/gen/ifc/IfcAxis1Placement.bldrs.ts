
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis1placement.htm
 */
export default  class IfcAxis1Placement extends IfcPlacement 
{    
    public readonly specification: IfcAxis1PlacementSpecification = IfcAxis1PlacementSpecification.instance;

private Axis_? : IfcDirection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAxis1PlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAxis1Placement';

    public readonly required: ReadonlyArray< string > = [ 'IfcAxis1Placement', 'IfcPlacement', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Axis',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAxis1PlacementSpecification = new IfcAxis1PlacementSpecification();
}
