
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPermeableCoveringOperationEnum from "./IfcPermeableCoveringOperationEnum.bldrs"
import IfcWindowPanelPositionEnum from "./IfcWindowPanelPositionEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpermeablecoveringproperties.htm
 */
export default class IfcPermeableCoveringProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPermeableCoveringProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPermeableCoveringPropertiesSpecification = IfcPermeableCoveringPropertiesSpecification.instance;

    constructor( public readonly OperationType : IfcPermeableCoveringOperationEnum , public readonly PanelPosition : IfcWindowPanelPositionEnum , public readonly FrameDepth : IfcPositiveLengthMeasure  | undefined, public readonly FrameThickness : IfcPositiveLengthMeasure  | undefined, public readonly ShapeAspectStyle : IfcShapeAspect  | undefined ) {}
}

export class IfcPermeableCoveringPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPermeableCoveringProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPermeableCoveringOperationEnum'
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

    public static readonly instance: IfcPermeableCoveringPropertiesSpecification = new IfcPermeableCoveringPropertiesSpecification();
}
