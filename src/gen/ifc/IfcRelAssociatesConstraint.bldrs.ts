
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesconstraint.htm
 */
export default  class IfcRelAssociatesConstraint extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesConstraintSpecification = IfcRelAssociatesConstraintSpecification.instance;

private Intent_? : IfcLabel
    private RelatingConstraint_? : IfcConstraint

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesConstraintSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesConstraint';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesConstraint', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Intent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesConstraintSpecification = new IfcRelAssociatesConstraintSpecification();
}
