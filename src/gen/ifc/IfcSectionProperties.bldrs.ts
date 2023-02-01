
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSectionTypeEnum from "./IfcSectionTypeEnum.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionproperties.htm
 */
export default  class IfcSectionProperties extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcSectionPropertiesSpecification = IfcSectionPropertiesSpecification.instance;

private SectionType_? : IfcSectionTypeEnum
    private StartProfile_? : IfcProfileDef
    private EndProfile_? : IfcProfileDef

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSectionPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSectionProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcSectionProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionTypeEnum',
			optional: false
		}, 
		{
			name: 'StartProfile',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef',
			optional: false
		}, 
		{
			name: 'EndProfile',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSectionPropertiesSpecification = new IfcSectionPropertiesSpecification();
}
