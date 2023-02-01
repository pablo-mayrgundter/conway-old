
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcDraughtingCallout from "./IfcDraughtingCallout.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingcalloutrelationship.htm
 */
export default  class IfcDraughtingCalloutRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDraughtingCalloutRelationshipSpecification = IfcDraughtingCalloutRelationshipSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private RelatingDraughtingCallout_? : IfcDraughtingCallout
    private RelatedDraughtingCallout_? : IfcDraughtingCallout

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDraughtingCalloutRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingCalloutRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcDraughtingCalloutRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'RelatingDraughtingCallout',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDraughtingCallout',
			optional: false
		}, 
		{
			name: 'RelatedDraughtingCallout',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDraughtingCallout',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDraughtingCalloutRelationshipSpecification = new IfcDraughtingCalloutRelationshipSpecification();
}
