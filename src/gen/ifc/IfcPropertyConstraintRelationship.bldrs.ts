
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcProperty from "./IfcProperty.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyconstraintrelationship.htm
 */
export default  class IfcPropertyConstraintRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcPropertyConstraintRelationshipSpecification = IfcPropertyConstraintRelationshipSpecification.instance;

private RelatingConstraint_? : IfcConstraint
    private RelatedProperties_? : Array<IfcProperty>
    private Name_? : IfcLabel
    private Description_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPropertyConstraintRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertyConstraintRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertyConstraintRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint',
			optional: false
		}, 
		{
			name: 'RelatedProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>',
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
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertyConstraintRelationshipSpecification = new IfcPropertyConstraintRelationshipSpecification();
}
