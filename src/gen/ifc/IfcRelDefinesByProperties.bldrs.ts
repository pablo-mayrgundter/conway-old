
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyproperties.htm
 */
export default  class IfcRelDefinesByProperties extends IfcRelDefines 
{    
    public readonly specification: IfcRelDefinesByPropertiesSpecification = IfcRelDefinesByPropertiesSpecification.instance;

private RelatingPropertyDefinition_? : IfcPropertySetDefinition

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelDefinesByPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelDefinesByProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelDefinesByProperties', 'IfcRelDefines', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingPropertyDefinition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPropertySetDefinition',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelDefinesByPropertiesSpecification = new IfcRelDefinesByPropertiesSpecification();
}
