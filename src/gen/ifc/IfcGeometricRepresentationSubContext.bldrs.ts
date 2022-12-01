
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext.bldrs"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.bldrs"
import {IfcGeometricProjectionEnum} from "./IfcGeometricProjectionEnum.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.bldrs"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.bldrs"
import {IfcDimensionCount} from "./IfcDimensionCount.bldrs"
import {IfcDirection} from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationsubcontext.htm
 */
export default class IfcGeometricRepresentationSubContext implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGeometricRepresentationSubContext';

    public readonly __version__: number = 0;

	ParentContext : IfcGeometricRepresentationContext;
	TargetScale? : IfcPositiveRatioMeasure;
	TargetView : IfcGeometricProjectionEnum;
	UserDefinedTargetView? : IfcLabel;

}

export class IfcGeometricRepresentationSubContextSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricRepresentationSubContext';

    public readonly required: string[] = [ 'IfcGeometricRepresentationContext', 'IfcRepresentationContext' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ParentContext',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGeometricRepresentationContext'
		}, 
		{
			name: 'TargetScale',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'TargetView',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGeometricProjectionEnum'
		}, 
		{
			name: 'UserDefinedTargetView',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
