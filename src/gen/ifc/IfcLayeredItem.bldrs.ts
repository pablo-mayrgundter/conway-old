
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclayereditem.htm
 */

export default class IfcLayeredItem
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcLayeredItemVariant ) {}
}

export type IfcLayeredItemType = 'IfcRepresentationItem'|'IfcRepresentation';

export type IfcLayeredItemChoices = IfcRepresentationItem|IfcRepresentation;

export type IfcLayeredItemVariant = ({ type: 'IfcRepresentationItem'; value: IfcRepresentationItem }|{ type: 'IfcRepresentation'; value: IfcRepresentation }) & { type: IfcLayeredItemType; value: IfcLayeredItemChoices };

