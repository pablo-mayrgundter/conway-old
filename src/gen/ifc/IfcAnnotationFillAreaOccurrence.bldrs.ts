
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPoint from "./IfcPoint.bldrs"
import IfcGlobalOrLocalEnum from "./IfcGlobalOrLocalEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillareaoccurrence.htm
 */
export default  class IfcAnnotationFillAreaOccurrence extends IfcAnnotationOccurrence 
{    
    public readonly specification: IfcAnnotationFillAreaOccurrenceSpecification = IfcAnnotationFillAreaOccurrenceSpecification.instance;

private FillStyleTarget_? : IfcPoint
    private GlobalOrLocal_? : IfcGlobalOrLocalEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAnnotationFillAreaOccurrenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationFillAreaOccurrence';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationFillAreaOccurrence', 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FillStyleTarget',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint',
			optional: true
		}, 
		{
			name: 'GlobalOrLocal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGlobalOrLocalEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationFillAreaOccurrenceSpecification = new IfcAnnotationFillAreaOccurrenceSpecification();
}
