
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelDefinesByProperties from "./IfcRelDefinesByProperties.bldrs"
import IfcTypeObject from "./IfcTypeObject.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinition.htm
 */
export default abstract class IfcPropertySetDefinition extends IfcPropertyDefinition 
{    
    public readonly specification: IfcPropertySetDefinitionSpecification = IfcPropertySetDefinitionSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPropertySetDefinitionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertySetDefinition';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertySetDefinitionSpecification = new IfcPropertySetDefinitionSpecification();
}
