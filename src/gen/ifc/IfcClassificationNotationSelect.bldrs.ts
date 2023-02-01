
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationnotationselect.htm
 */

export default class IfcClassificationNotationSelect
{
    constructor( public readonly value: IfcClassificationNotationSelectVariant ) {}
}

export type IfcClassificationNotationSelectType = 'IfcClassificationNotation'|'IfcClassificationReference';

export type IfcClassificationNotationSelectChoices = IfcClassificationNotation|IfcClassificationReference;

export type IfcClassificationNotationSelectVariant = ({ type: 'IfcClassificationNotation'; value: IfcClassificationNotation }|{ type: 'IfcClassificationReference'; value: IfcClassificationReference }) & { type: IfcClassificationNotationSelectType; value: IfcClassificationNotationSelectChoices };

export function IfcClassificationNotationSelectSerializer( value?: IfcClassificationNotationSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
