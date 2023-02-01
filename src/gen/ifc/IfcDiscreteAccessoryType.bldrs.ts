
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdiscreteaccessorytype.htm
 */
export default  class IfcDiscreteAccessoryType extends IfcElementComponentType 
{    
    public readonly specification: IfcDiscreteAccessoryTypeSpecification = IfcDiscreteAccessoryTypeSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDiscreteAccessoryTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDiscreteAccessoryType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDiscreteAccessoryType', 'IfcElementComponentType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDiscreteAccessoryTypeSpecification = new IfcDiscreteAccessoryTypeSpecification();
}
