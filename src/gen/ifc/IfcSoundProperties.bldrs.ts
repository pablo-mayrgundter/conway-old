
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoolean from "./IfcBoolean.bldrs"
import IfcSoundScaleEnum from "./IfcSoundScaleEnum.bldrs"
import IfcSoundValue from "./IfcSoundValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundproperties.htm
 */
export default  class IfcSoundProperties extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcSoundPropertiesSpecification = IfcSoundPropertiesSpecification.instance;

private IsAttenuating_? : IfcBoolean
    private SoundScale_? : IfcSoundScaleEnum
    private SoundValues_? : Array<IfcSoundValue>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSoundPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSoundProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcSoundProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'IsAttenuating',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoolean',
			optional: false
		}, 
		{
			name: 'SoundScale',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSoundScaleEnum',
			optional: true
		}, 
		{
			name: 'SoundValues',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSoundValue>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSoundPropertiesSpecification = new IfcSoundPropertiesSpecification();
}
