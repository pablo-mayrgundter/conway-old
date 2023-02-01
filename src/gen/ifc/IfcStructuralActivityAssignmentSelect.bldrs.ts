
import IfcStructuralItem from "./IfcStructuralItem.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralactivityassignmentselect.htm
 */

export default class IfcStructuralActivityAssignmentSelect
{
    constructor( public readonly value: IfcStructuralActivityAssignmentSelectVariant ) {}
}

export type IfcStructuralActivityAssignmentSelectType = 'IfcStructuralItem'|'IfcElement';

export type IfcStructuralActivityAssignmentSelectChoices = IfcStructuralItem|IfcElement;

export type IfcStructuralActivityAssignmentSelectVariant = ({ type: 'IfcStructuralItem'; value: IfcStructuralItem }|{ type: 'IfcElement'; value: IfcElement }) & { type: IfcStructuralActivityAssignmentSelectType; value: IfcStructuralActivityAssignmentSelectChoices };

export function IfcStructuralActivityAssignmentSelectSerializer( value?: IfcStructuralActivityAssignmentSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
