
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"
import IfcMappedItem from "./IfcMappedItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationmap.htm
 */
export default  class IfcRepresentationMap extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcRepresentationMapSpecification = IfcRepresentationMapSpecification.instance;

private MappingOrigin_? : IfcAxis2Placement2D|IfcAxis2Placement3D
    private MappedRepresentation_? : IfcRepresentation

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRepresentationMapSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRepresentationMap';

    public readonly required: ReadonlyArray< string > = [ 'IfcRepresentationMap' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MappingOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D',
			optional: false
		}, 
		{
			name: 'MappedRepresentation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentation',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRepresentationMapSpecification = new IfcRepresentationMapSpecification();
}
