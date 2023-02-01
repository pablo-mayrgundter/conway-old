
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcDoorPanelOperationEnum from "./IfcDoorPanelOperationEnum.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcDoorPanelPositionEnum from "./IfcDoorPanelPositionEnum.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorpanelproperties.htm
 */
export default  class IfcDoorPanelProperties extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcDoorPanelPropertiesSpecification = IfcDoorPanelPropertiesSpecification.instance;

private PanelDepth_? : IfcPositiveLengthMeasure
    private PanelOperation_? : IfcDoorPanelOperationEnum
    private PanelWidth_? : IfcNormalisedRatioMeasure
    private PanelPosition_? : IfcDoorPanelPositionEnum
    private ShapeAspectStyle_? : IfcShapeAspect

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDoorPanelPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDoorPanelProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcDoorPanelProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PanelDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'PanelOperation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorPanelOperationEnum',
			optional: false
		}, 
		{
			name: 'PanelWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'PanelPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorPanelPositionEnum',
			optional: false
		}, 
		{
			name: 'ShapeAspectStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDoorPanelPropertiesSpecification = new IfcDoorPanelPropertiesSpecification();
}
