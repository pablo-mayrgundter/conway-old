
import IfcOneDirectionRepeatFactor from "./IfcOneDirectionRepeatFactor.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchatchlinedistanceselect.htm
 */

export default class IfcHatchLineDistanceSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcHatchLineDistanceSelectVariant ) {}
}

export type IfcHatchLineDistanceSelectType = 'IfcOneDirectionRepeatFactor'|'IfcPositiveLengthMeasure';

export type IfcHatchLineDistanceSelectChoices = IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure;

export type IfcHatchLineDistanceSelectVariant = ({ type: 'IfcOneDirectionRepeatFactor'; value: IfcOneDirectionRepeatFactor }|{ type: 'IfcPositiveLengthMeasure'; value: IfcPositiveLengthMeasure }) & { type: IfcHatchLineDistanceSelectType; value: IfcHatchLineDistanceSelectChoices };

