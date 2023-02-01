
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"
import IfcArithmeticOperatorEnum from "./IfcArithmeticOperatorEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvaluerelationship.htm
 */
export default  class IfcAppliedValueRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcAppliedValueRelationshipSpecification = IfcAppliedValueRelationshipSpecification.instance;

private ComponentOfTotal_? : IfcAppliedValue
    private Components_? : Array<IfcAppliedValue>
    private ArithmeticOperator_? : IfcArithmeticOperatorEnum
    private Name_? : IfcLabel
    private Description_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAppliedValueRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAppliedValueRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcAppliedValueRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ComponentOfTotal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAppliedValue',
			optional: false
		}, 
		{
			name: 'Components',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAppliedValue>',
			optional: false
		}, 
		{
			name: 'ArithmeticOperator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcArithmeticOperatorEnum',
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

    public static readonly instance: IfcAppliedValueRelationshipSpecification = new IfcAppliedValueRelationshipSpecification();
}
