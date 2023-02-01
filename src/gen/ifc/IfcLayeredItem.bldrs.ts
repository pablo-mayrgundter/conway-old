
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclayereditem.htm
 */

export default class IfcLayeredItem
{
    constructor( public readonly value: IfcLayeredItemVariant ) {}
}

export type IfcLayeredItemType = 'IfcRepresentationItem'|'IfcRepresentation';

export type IfcLayeredItemChoices = IfcRepresentationItem|IfcRepresentation;

export type IfcLayeredItemVariant = ({ type: 'IfcRepresentationItem'; value: IfcRepresentationItem }|{ type: 'IfcRepresentation'; value: IfcRepresentation }) & { type: IfcLayeredItemType; value: IfcLayeredItemChoices };

export function IfcLayeredItemSerializer( value?: IfcLayeredItem, to: SmartBuffer, offset?: number )
{
    switch
    
}
