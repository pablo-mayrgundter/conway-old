
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcMonetaryMeasure from "./IfcMonetaryMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvalueselect.htm
 */

export default class IfcAppliedValueSelect
{
    constructor( public readonly value: IfcAppliedValueSelectVariant ) {}
}

export type IfcAppliedValueSelectType = 'IfcRatioMeasure'|'IfcMeasureWithUnit'|'IfcMonetaryMeasure';

export type IfcAppliedValueSelectChoices = IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure;

export type IfcAppliedValueSelectVariant = ({ type: 'IfcRatioMeasure'; value: IfcRatioMeasure }|{ type: 'IfcMeasureWithUnit'; value: IfcMeasureWithUnit }|{ type: 'IfcMonetaryMeasure'; value: IfcMonetaryMeasure }) & { type: IfcAppliedValueSelectType; value: IfcAppliedValueSelectChoices };

export function IfcAppliedValueSelectSerializer( value?: IfcAppliedValueSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
