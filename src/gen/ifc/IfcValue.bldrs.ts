
import IfcMeasureValue from "./IfcMeasureValue.bldrs"
import IfcSimpleValue from "./IfcSimpleValue.bldrs"
import IfcDerivedMeasureValue from "./IfcDerivedMeasureValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvalue.htm
 */

export default class IfcValue
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcValueVariant ) {}
}

export type IfcValueType = 'IfcMeasureValue'|'IfcSimpleValue'|'IfcDerivedMeasureValue';

export type IfcValueChoices = IfcMeasureValue|IfcSimpleValue|IfcDerivedMeasureValue;

export type IfcValueVariant = ({ type: 'IfcMeasureValue'; value: IfcMeasureValue }|{ type: 'IfcSimpleValue'; value: IfcSimpleValue }|{ type: 'IfcDerivedMeasureValue'; value: IfcDerivedMeasureValue }) & { type: IfcValueType; value: IfcValueChoices };

