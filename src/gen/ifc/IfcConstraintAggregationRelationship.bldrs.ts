
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcLogicalOperatorEnum from "./IfcLogicalOperatorEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraintaggregationrelationship.htm
 */
export default  class IfcConstraintAggregationRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcConstraintAggregationRelationshipSpecification = IfcConstraintAggregationRelationshipSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private RelatingConstraint_? : IfcConstraint
    private RelatedConstraints_? : Array<IfcConstraint>
    private LogicalAggregator_? : IfcLogicalOperatorEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConstraintAggregationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstraintAggregationRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcConstraintAggregationRelationship' ];

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
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint',
			optional: false
		}, 
		{
			name: 'RelatedConstraints',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcConstraint>',
			optional: false
		}, 
		{
			name: 'LogicalAggregator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLogicalOperatorEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConstraintAggregationRelationshipSpecification = new IfcConstraintAggregationRelationshipSpecification();
}
