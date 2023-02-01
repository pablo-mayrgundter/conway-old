
import IfcInteger from "./IfcInteger.bldrs"
import IfcReal from "./IfcReal.bldrs"
import IfcBoolean from "./IfcBoolean.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcLogical from "./IfcLogical.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimplevalue.htm
 */

export default class IfcSimpleValue
{
    constructor( public readonly value: IfcSimpleValueVariant ) {}
}

export type IfcSimpleValueType = 'IfcInteger'|'IfcReal'|'IfcBoolean'|'IfcIdentifier'|'IfcText'|'IfcLabel'|'IfcLogical';

export type IfcSimpleValueChoices = IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical;

export type IfcSimpleValueVariant = ({ type: 'IfcInteger'; value: IfcInteger }|{ type: 'IfcReal'; value: IfcReal }|{ type: 'IfcBoolean'; value: IfcBoolean }|{ type: 'IfcIdentifier'; value: IfcIdentifier }|{ type: 'IfcText'; value: IfcText }|{ type: 'IfcLabel'; value: IfcLabel }|{ type: 'IfcLogical'; value: IfcLogical }) & { type: IfcSimpleValueType; value: IfcSimpleValueChoices };

export function IfcSimpleValueSerializer( value?: IfcSimpleValue, to: SmartBuffer, offset?: number )
{
    switch
    
}
