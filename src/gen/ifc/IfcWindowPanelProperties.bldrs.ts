
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcWindowPanelOperationEnum from "./IfcWindowPanelOperationEnum.bldrs"
import IfcWindowPanelPositionEnum from "./IfcWindowPanelPositionEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowpanelproperties.htm
 */
export default  class IfcWindowPanelProperties extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcWindowPanelPropertiesSpecification = IfcWindowPanelPropertiesSpecification.instance;

private OperationType_? : IfcWindowPanelOperationEnum
    private PanelPosition_? : IfcWindowPanelPositionEnum
    private FrameDepth_? : IfcPositiveLengthMeasure
    private FrameThickness_? : IfcPositiveLengthMeasure
    private ShapeAspectStyle_? : IfcShapeAspect

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcWindowPanelPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindowPanelProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcWindowPanelProperties', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowPanelOperationEnum',
			optional: false
		}, 
		{
			name: 'PanelPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowPanelPositionEnum',
			optional: false
		}, 
		{
			name: 'FrameDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'FrameThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
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

    public static readonly instance: IfcWindowPanelPropertiesSpecification = new IfcWindowPanelPropertiesSpecification();
}
