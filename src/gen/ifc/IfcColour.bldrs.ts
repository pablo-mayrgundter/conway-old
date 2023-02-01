
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolour.htm
 */

export default class IfcColour
{
    constructor( public readonly value: IfcColourVariant ) {}
}

export type IfcColourType = 'IfcColourSpecification'|'IfcPreDefinedColour';

export type IfcColourChoices = IfcColourSpecification|IfcPreDefinedColour;

export type IfcColourVariant = ({ type: 'IfcColourSpecification'; value: IfcColourSpecification }|{ type: 'IfcPreDefinedColour'; value: IfcPreDefinedColour }) & { type: IfcColourType; value: IfcColourChoices };

export function IfcColourSerializer( value?: IfcColour, to: SmartBuffer, offset?: number )
{
    switch
    
}
