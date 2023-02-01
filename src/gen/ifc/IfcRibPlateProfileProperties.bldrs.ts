
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcRibPlateDirectionEnum from "./IfcRibPlateDirectionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcribplateprofileproperties.htm
 */
export default  class IfcRibPlateProfileProperties extends IfcProfileProperties 
{    
    public readonly specification: IfcRibPlateProfilePropertiesSpecification = IfcRibPlateProfilePropertiesSpecification.instance;

private Thickness_? : IfcPositiveLengthMeasure
    private RibHeight_? : IfcPositiveLengthMeasure
    private RibWidth_? : IfcPositiveLengthMeasure
    private RibSpacing_? : IfcPositiveLengthMeasure
    private Direction_? : IfcRibPlateDirectionEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRibPlateProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRibPlateProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcRibPlateProfileProperties', 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Thickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'RibHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'RibWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'RibSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'Direction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRibPlateDirectionEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRibPlateProfilePropertiesSpecification = new IfcRibPlateProfilePropertiesSpecification();
}
