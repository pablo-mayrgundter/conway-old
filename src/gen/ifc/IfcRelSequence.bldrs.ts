
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProcess from "./IfcProcess.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcSequenceEnum from "./IfcSequenceEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelsequence.htm
 */
export default  class IfcRelSequence extends IfcRelConnects 
{    
    public readonly specification: IfcRelSequenceSpecification = IfcRelSequenceSpecification.instance;

private RelatingProcess_? : IfcProcess
    private RelatedProcess_? : IfcProcess
    private TimeLag_? : IfcTimeMeasure
    private SequenceType_? : IfcSequenceEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelSequenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelSequence';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelSequence', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcess',
			optional: false
		}, 
		{
			name: 'RelatedProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcess',
			optional: false
		}, 
		{
			name: 'TimeLag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: false
		}, 
		{
			name: 'SequenceType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSequenceEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelSequenceSpecification = new IfcRelSequenceSpecification();
}
