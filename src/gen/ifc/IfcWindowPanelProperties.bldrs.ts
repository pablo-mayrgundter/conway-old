
import Component from "../../core/components"
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
export default class IfcWindowPanelProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWindowPanelProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcWindowPanelPropertiesSpecification = IfcWindowPanelPropertiesSpecification.instance;

    constructor( public readonly OperationType : IfcWindowPanelOperationEnum , public readonly PanelPosition : IfcWindowPanelPositionEnum , public readonly FrameDepth : IfcPositiveLengthMeasure  | undefined, public readonly FrameThickness : IfcPositiveLengthMeasure  | undefined, public readonly ShapeAspectStyle : IfcShapeAspect  | undefined ) {}
}

export class IfcWindowPanelPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindowPanelProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowPanelOperationEnum'
		}, 
		{
			name: 'PanelPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowPanelPositionEnum'
		}, 
		{
			name: 'FrameDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'FrameThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'ShapeAspectStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWindowPanelPropertiesSpecification = new IfcWindowPanelPropertiesSpecification();
}
