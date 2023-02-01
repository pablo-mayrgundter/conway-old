
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcReinforcingBarRoleEnum from "./IfcReinforcingBarRoleEnum.bldrs"
import IfcSectionProperties from "./IfcSectionProperties.bldrs"
import IfcReinforcementBarProperties from "./IfcReinforcementBarProperties.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionreinforcementproperties.htm
 */
export default  class IfcSectionReinforcementProperties extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcSectionReinforcementPropertiesSpecification = IfcSectionReinforcementPropertiesSpecification.instance;

private LongitudinalStartPosition_? : IfcLengthMeasure
    private LongitudinalEndPosition_? : IfcLengthMeasure
    private TransversePosition_? : IfcLengthMeasure
    private ReinforcementRole_? : IfcReinforcingBarRoleEnum
    private SectionDefinition_? : IfcSectionProperties
    private CrossSectionReinforcementDefinitions_? : Array<IfcReinforcementBarProperties>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSectionReinforcementPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSectionReinforcementProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcSectionReinforcementProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LongitudinalStartPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: false
		}, 
		{
			name: 'LongitudinalEndPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: false
		}, 
		{
			name: 'TransversePosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'ReinforcementRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarRoleEnum',
			optional: false
		}, 
		{
			name: 'SectionDefinition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionProperties',
			optional: false
		}, 
		{
			name: 'CrossSectionReinforcementDefinitions',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcReinforcementBarProperties>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSectionReinforcementPropertiesSpecification = new IfcSectionReinforcementPropertiesSpecification();
}
