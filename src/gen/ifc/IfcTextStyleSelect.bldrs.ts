
import IfcTextStyleWithBoxCharacteristics from "./IfcTextStyleWithBoxCharacteristics.bldrs"
import IfcTextStyleTextModel from "./IfcTextStyleTextModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyleselect.htm
 */

export default class IfcTextStyleSelect
{
    constructor( public readonly value: IfcTextStyleSelectVariant ) {}
}

export type IfcTextStyleSelectType = 'IfcTextStyleWithBoxCharacteristics'|'IfcTextStyleTextModel';

export type IfcTextStyleSelectChoices = IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel;

export type IfcTextStyleSelectVariant = ({ type: 'IfcTextStyleWithBoxCharacteristics'; value: IfcTextStyleWithBoxCharacteristics }|{ type: 'IfcTextStyleTextModel'; value: IfcTextStyleTextModel }) & { type: IfcTextStyleSelectType; value: IfcTextStyleSelectChoices };

export function IfcTextStyleSelectSerializer( value?: IfcTextStyleSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
