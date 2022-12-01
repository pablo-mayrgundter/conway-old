
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLoadGroupTypeEnum} from "./IfcLoadGroupTypeEnum.bldrs"
import {IfcActionTypeEnum} from "./IfcActionTypeEnum.bldrs"
import {IfcActionSourceTypeEnum} from "./IfcActionSourceTypeEnum.bldrs"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcStructuralResultGroup} from "./IfcStructuralResultGroup.bldrs"
import {IfcStructuralAnalysisModel} from "./IfcStructuralAnalysisModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadgroup.htm
 */
export default class IfcStructuralLoadGroup implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadGroup';

    public readonly __version__: number = 0;

	PredefinedType : IfcLoadGroupTypeEnum;
	ActionType : IfcActionTypeEnum;
	ActionSource : IfcActionSourceTypeEnum;
	Coefficient? : IfcPositiveRatioMeasure;
	Purpose? : IfcLabel;

}

export class IfcStructuralLoadGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadGroup';

    public readonly required: string[] = [ 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLoadGroupTypeEnum'
		}, 
		{
			name: 'ActionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActionTypeEnum'
		}, 
		{
			name: 'ActionSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActionSourceTypeEnum'
		}, 
		{
			name: 'Coefficient',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
