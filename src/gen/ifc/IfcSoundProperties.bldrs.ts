
import Component from "../../core/components"
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
export default class IfcSoundProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSoundProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSoundPropertiesSpecification = IfcSoundPropertiesSpecification.instance;

    constructor( public readonly IsAttenuating : IfcBoolean , public readonly SoundScale : IfcSoundScaleEnum  | undefined, public readonly SoundValues : Array<IfcSoundValue>  ) {}
}

export class IfcSoundPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSoundProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'IsAttenuating',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoolean'
		}, 
		{
			name: 'SoundScale',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSoundScaleEnum'
		}, 
		{
			name: 'SoundValues',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSoundValue>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSoundPropertiesSpecification = new IfcSoundPropertiesSpecification();
}
