
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcReinforcingBarRoleEnum from "./IfcReinforcingBarRoleEnum.bldrs"
import IfcReinforcingBarSurfaceEnum from "./IfcReinforcingBarSurfaceEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingbar.htm
 */
export default  class IfcReinforcingBar extends IfcReinforcingElement 
{    
    public readonly specification: IfcReinforcingBarSpecification = IfcReinforcingBarSpecification.instance;

private NominalDiameter_? : IfcPositiveLengthMeasure
    private CrossSectionArea_? : IfcAreaMeasure
    private BarLength_? : IfcPositiveLengthMeasure
    private BarRole_? : IfcReinforcingBarRoleEnum
    private BarSurface_? : IfcReinforcingBarSurfaceEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcReinforcingBarSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcingBar';

    public readonly required: ReadonlyArray< string > = [ 'IfcReinforcingBar', 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'CrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: false
		}, 
		{
			name: 'BarLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'BarRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarRoleEnum',
			optional: false
		}, 
		{
			name: 'BarSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarSurfaceEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcReinforcingBarSpecification = new IfcReinforcingBarSpecification();
}
