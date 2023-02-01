
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcSectionReinforcementProperties from "./IfcSectionReinforcementProperties.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementdefinitionproperties.htm
 */
export default  class IfcReinforcementDefinitionProperties extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcReinforcementDefinitionPropertiesSpecification = IfcReinforcementDefinitionPropertiesSpecification.instance;

private DefinitionType_? : IfcLabel
    private ReinforcementSectionDefinitions_? : Array<IfcSectionReinforcementProperties>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcReinforcementDefinitionPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcementDefinitionProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcReinforcementDefinitionProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DefinitionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ReinforcementSectionDefinitions',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSectionReinforcementProperties>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcReinforcementDefinitionPropertiesSpecification = new IfcReinforcementDefinitionPropertiesSpecification();
}
