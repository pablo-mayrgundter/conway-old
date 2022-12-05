
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsizeselect.htm
 */

export default class IfcSizeSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcSizeSelectVariant ) {}
}

export type IfcSizeSelectType = 'IfcRatioMeasure'|'IfcLengthMeasure'|'IfcDescriptiveMeasure'|'IfcPositiveLengthMeasure'|'IfcNormalisedRatioMeasure'|'IfcPositiveRatioMeasure';

export type IfcSizeSelectChoices = IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure;

export type IfcSizeSelectVariant = ({ type: 'IfcRatioMeasure'; value: IfcRatioMeasure }|{ type: 'IfcLengthMeasure'; value: IfcLengthMeasure }|{ type: 'IfcDescriptiveMeasure'; value: IfcDescriptiveMeasure }|{ type: 'IfcPositiveLengthMeasure'; value: IfcPositiveLengthMeasure }|{ type: 'IfcNormalisedRatioMeasure'; value: IfcNormalisedRatioMeasure }|{ type: 'IfcPositiveRatioMeasure'; value: IfcPositiveRatioMeasure }) & { type: IfcSizeSelectType; value: IfcSizeSelectChoices };

