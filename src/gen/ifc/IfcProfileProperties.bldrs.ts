
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofileproperties.htm
 */
export default abstract class IfcProfileProperties extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcProfilePropertiesSpecification = IfcProfilePropertiesSpecification.instance;

private ProfileName_? : IfcLabel
    private ProfileDefinition_? : IfcProfileDef

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProfileName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ProfileDefinition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProfilePropertiesSpecification = new IfcProfilePropertiesSpecification();
}
