
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpace from "./IfcSpace.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"
import IfcPhysicalOrVirtualEnum from "./IfcPhysicalOrVirtualEnum.bldrs"
import IfcInternalOrExternalEnum from "./IfcInternalOrExternalEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary.htm
 */
export default  class IfcRelSpaceBoundary extends IfcRelConnects 
{    
    public readonly specification: IfcRelSpaceBoundarySpecification = IfcRelSpaceBoundarySpecification.instance;

private RelatingSpace_? : IfcSpace
    private RelatedBuildingElement_? : IfcElement
    private ConnectionGeometry_? : IfcConnectionGeometry
    private PhysicalOrVirtualBoundary_? : IfcPhysicalOrVirtualEnum
    private InternalOrExternalBoundary_? : IfcInternalOrExternalEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelSpaceBoundarySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelSpaceBoundary';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelSpaceBoundary', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingSpace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpace',
			optional: false
		}, 
		{
			name: 'RelatedBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: true
		}, 
		{
			name: 'ConnectionGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionGeometry',
			optional: true
		}, 
		{
			name: 'PhysicalOrVirtualBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPhysicalOrVirtualEnum',
			optional: false
		}, 
		{
			name: 'InternalOrExternalBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInternalOrExternalEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelSpaceBoundarySpecification = new IfcRelSpaceBoundarySpecification();
}
