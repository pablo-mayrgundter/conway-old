
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTypeObject from "./IfcTypeObject.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytype.htm
 */
export default  class IfcRelDefinesByType extends IfcRelDefines 
{    
    public readonly specification: IfcRelDefinesByTypeSpecification = IfcRelDefinesByTypeSpecification.instance;

private RelatingType_? : IfcTypeObject

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelDefinesByTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelDefinesByType';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelDefinesByType', 'IfcRelDefines', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTypeObject',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelDefinesByTypeSpecification = new IfcRelDefinesByTypeSpecification();
}
