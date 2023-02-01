
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedsymbol.htm
 */
export default  class IfcExternallyDefinedSymbol extends IfcExternalReference 
{    
    public readonly specification: IfcExternallyDefinedSymbolSpecification = IfcExternallyDefinedSymbolSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcExternallyDefinedSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExternallyDefinedSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcExternallyDefinedSymbol', 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcExternallyDefinedSymbolSpecification = new IfcExternallyDefinedSymbolSpecification();
}
