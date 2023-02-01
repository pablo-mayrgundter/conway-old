
import IfcLabel from "./IfcLabel.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconditioncriterionselect.htm
 */

export default class IfcConditionCriterionSelect
{
    constructor( public readonly value: IfcConditionCriterionSelectVariant ) {}
}

export type IfcConditionCriterionSelectType = 'IfcLabel'|'IfcMeasureWithUnit';

export type IfcConditionCriterionSelectChoices = IfcLabel|IfcMeasureWithUnit;

export type IfcConditionCriterionSelectVariant = ({ type: 'IfcLabel'; value: IfcLabel }|{ type: 'IfcMeasureWithUnit'; value: IfcMeasureWithUnit }) & { type: IfcConditionCriterionSelectType; value: IfcConditionCriterionSelectChoices };

export function IfcConditionCriterionSelectSerializer( value?: IfcConditionCriterionSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
