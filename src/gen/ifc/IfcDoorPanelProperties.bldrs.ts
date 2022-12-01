
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcDoorPanelOperationEnum} from "./IfcDoorPanelOperationEnum.bldrs"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.bldrs"
import {IfcDoorPanelPositionEnum} from "./IfcDoorPanelPositionEnum.bldrs"
import {IfcShapeAspect} from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorpanelproperties.htm
 */
export default class IfcDoorPanelProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDoorPanelProperties';

    public readonly __version__: number = 0;

	PanelDepth? : IfcPositiveLengthMeasure;
	PanelOperation : IfcDoorPanelOperationEnum;
	PanelWidth? : IfcNormalisedRatioMeasure;
	PanelPosition : IfcDoorPanelPositionEnum;
	ShapeAspectStyle? : IfcShapeAspect;

}

export class IfcDoorPanelPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDoorPanelProperties';

    public readonly required: string[] = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
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
}
