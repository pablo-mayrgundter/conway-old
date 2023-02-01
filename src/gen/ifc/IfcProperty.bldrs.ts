
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcPropertyDependencyRelationship from "./IfcPropertyDependencyRelationship.bldrs"
import IfcComplexProperty from "./IfcComplexProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproperty.htm
 */
export default abstract class IfcProperty extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcPropertySpecification = IfcPropertySpecification.instance;

private Name_? : IfcIdentifier
    private Description_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPropertySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProperty';

    public readonly required: ReadonlyArray< string > = [ 'IfcProperty' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
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

    public static readonly instance: IfcPropertySpecification = new IfcPropertySpecification();
}
