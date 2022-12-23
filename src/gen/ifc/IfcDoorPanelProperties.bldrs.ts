
import Component from "../../core/components"
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
export default class IfcDoorPanelProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDoorPanelProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDoorPanelPropertiesSpecification = IfcDoorPanelPropertiesSpecification.instance;

    constructor( public readonly PanelDepth : IfcPositiveLengthMeasure  | undefined, public readonly PanelOperation : IfcDoorPanelOperationEnum , public readonly PanelWidth : IfcNormalisedRatioMeasure  | undefined, public readonly PanelPosition : IfcDoorPanelPositionEnum , public readonly ShapeAspectStyle : IfcShapeAspect  | undefined ) {}
}

export class IfcDoorPanelPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDoorPanelProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PanelDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'PanelOperation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorPanelOperationEnum'
		}, 
		{
			name: 'PanelWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'PanelPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorPanelPositionEnum'
		}, 
		{
			name: 'ShapeAspectStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDoorPanelPropertiesSpecification = new IfcDoorPanelPropertiesSpecification();
}
