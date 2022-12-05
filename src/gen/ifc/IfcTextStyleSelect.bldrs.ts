
import IfcTextStyleWithBoxCharacteristics from "./IfcTextStyleWithBoxCharacteristics.bldrs"
import IfcTextStyleTextModel from "./IfcTextStyleTextModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyleselect.htm
 */

export default class IfcTextStyleSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcTextStyleSelectVariant ) {}
}

export type IfcTextStyleSelectType = 'IfcTextStyleWithBoxCharacteristics'|'IfcTextStyleTextModel';

export type IfcTextStyleSelectChoices = IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel;

export type IfcTextStyleSelectVariant = ({ type: 'IfcTextStyleWithBoxCharacteristics'; value: IfcTextStyleWithBoxCharacteristics }|{ type: 'IfcTextStyleTextModel'; value: IfcTextStyleTextModel }) & { type: IfcTextStyleSelectType; value: IfcTextStyleSelectChoices };

