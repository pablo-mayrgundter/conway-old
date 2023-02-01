
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEnergySequenceEnum from "./IfcEnergySequenceEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenergyproperties.htm
 */
export default  class IfcEnergyProperties extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcEnergyPropertiesSpecification = IfcEnergyPropertiesSpecification.instance;

private EnergySequence_? : IfcEnergySequenceEnum
    private UserDefinedEnergySequence_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcEnergyPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEnergyProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EnergySequence',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEnergySequenceEnum',
			optional: true
		}, 
		{
			name: 'UserDefinedEnergySequence',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEnergyPropertiesSpecification = new IfcEnergyPropertiesSpecification();
}
