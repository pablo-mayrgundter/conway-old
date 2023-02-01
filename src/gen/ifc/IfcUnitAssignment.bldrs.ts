
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDerivedUnit from "./IfcDerivedUnit.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitassignment.htm
 */
export default  class IfcUnitAssignment extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcUnitAssignmentSpecification = IfcUnitAssignmentSpecification.instance;

private Units_? : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcUnitAssignmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcUnitAssignment';

    public readonly required: ReadonlyArray< string > = [ 'IfcUnitAssignment' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Units',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcUnitAssignmentSpecification = new IfcUnitAssignmentSpecification();
}
