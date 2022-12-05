
import IfcLabel from "./IfcLabel.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconditioncriterionselect.htm
 */

export default class IfcConditionCriterionSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcConditionCriterionSelectVariant ) {}
}

export type IfcConditionCriterionSelectType = 'IfcLabel'|'IfcMeasureWithUnit';

export type IfcConditionCriterionSelectChoices = IfcLabel|IfcMeasureWithUnit;

export type IfcConditionCriterionSelectVariant = ({ type: 'IfcLabel'; value: IfcLabel }|{ type: 'IfcMeasureWithUnit'; value: IfcMeasureWithUnit }) & { type: IfcConditionCriterionSelectType; value: IfcConditionCriterionSelectChoices };

