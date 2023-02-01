
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsystemfurnitureelementtype.htm
 */
export default  class IfcSystemFurnitureElementType extends IfcFurnishingElementType 
{    
    public readonly specification: IfcSystemFurnitureElementTypeSpecification = IfcSystemFurnitureElementTypeSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSystemFurnitureElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSystemFurnitureElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcSystemFurnitureElementType', 'IfcFurnishingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSystemFurnitureElementTypeSpecification = new IfcSystemFurnitureElementTypeSpecification();
}
