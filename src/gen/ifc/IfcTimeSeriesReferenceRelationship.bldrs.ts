
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseriesreferencerelationship.htm
 */
export default  class IfcTimeSeriesReferenceRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTimeSeriesReferenceRelationshipSpecification = IfcTimeSeriesReferenceRelationshipSpecification.instance;

private ReferencedTimeSeries_? : IfcTimeSeries
    private TimeSeriesReferences_? : Array<IfcDocumentReference|IfcDocumentInformation>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTimeSeriesReferenceRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTimeSeriesReferenceRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcTimeSeriesReferenceRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ReferencedTimeSeries',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeries',
			optional: false
		}, 
		{
			name: 'TimeSeriesReferences',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDocumentReference|IfcDocumentInformation>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTimeSeriesReferenceRelationshipSpecification = new IfcTimeSeriesReferenceRelationshipSpecification();
}
