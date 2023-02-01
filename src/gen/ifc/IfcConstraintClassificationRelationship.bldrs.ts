
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraintclassificationrelationship.htm
 */
export default  class IfcConstraintClassificationRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcConstraintClassificationRelationshipSpecification = IfcConstraintClassificationRelationshipSpecification.instance;

private ClassifiedConstraint_? : IfcConstraint
    private RelatedClassifications_? : Array<IfcClassificationNotation|IfcClassificationReference>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConstraintClassificationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstraintClassificationRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcConstraintClassificationRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ClassifiedConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint',
			optional: false
		}, 
		{
			name: 'RelatedClassifications',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationNotation|IfcClassificationReference>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConstraintClassificationRelationshipSpecification = new IfcConstraintClassificationRelationshipSpecification();
}
