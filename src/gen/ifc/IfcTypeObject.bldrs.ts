
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"
import IfcRelDefinesByType from "./IfcRelDefinesByType.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeobject.htm
 */
export default  class IfcTypeObject extends IfcObjectDefinition 
{    
    public readonly specification: IfcTypeObjectSpecification = IfcTypeObjectSpecification.instance;

private ApplicableOccurrence_? : IfcLabel
    private HasPropertySets_? : Array<IfcPropertySetDefinition>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTypeObjectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTypeObject';

    public readonly required: ReadonlyArray< string > = [ 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ApplicableOccurrence',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'HasPropertySets',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPropertySetDefinition>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTypeObjectSpecification = new IfcTypeObjectSpecification();
}
