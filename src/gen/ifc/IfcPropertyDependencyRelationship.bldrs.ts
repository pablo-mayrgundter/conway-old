
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProperty from "./IfcProperty.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydependencyrelationship.htm
 */
export default  class IfcPropertyDependencyRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcPropertyDependencyRelationshipSpecification = IfcPropertyDependencyRelationshipSpecification.instance;

private DependingProperty_? : IfcProperty
    private DependantProperty_? : IfcProperty
    private Name_? : IfcLabel
    private Description_? : IfcText
    private Expression_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPropertyDependencyRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertyDependencyRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertyDependencyRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DependingProperty',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProperty',
			optional: false
		}, 
		{
			name: 'DependantProperty',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProperty',
			optional: false
		}, 
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
			name: 'Expression',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertyDependencyRelationshipSpecification = new IfcPropertyDependencyRelationshipSpecification();
}
