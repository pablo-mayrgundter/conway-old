
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcReinforcingBarSurfaceEnum from "./IfcReinforcingBarSurfaceEnum.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementbarproperties.htm
 */
export default  class IfcReinforcementBarProperties extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcReinforcementBarPropertiesSpecification = IfcReinforcementBarPropertiesSpecification.instance;

private TotalCrossSectionArea_? : IfcAreaMeasure
    private SteelGrade_? : IfcLabel
    private BarSurface_? : IfcReinforcingBarSurfaceEnum
    private EffectiveDepth_? : IfcLengthMeasure
    private NominalBarDiameter_? : IfcPositiveLengthMeasure
    private BarCount_? : IfcCountMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcReinforcementBarPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcementBarProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcReinforcementBarProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TotalCrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: false
		}, 
		{
			name: 'SteelGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'BarSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarSurfaceEnum',
			optional: true
		}, 
		{
			name: 'EffectiveDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'NominalBarDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'BarCount',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcReinforcementBarPropertiesSpecification = new IfcReinforcementBarPropertiesSpecification();
}
