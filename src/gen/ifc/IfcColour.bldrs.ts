
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolour.htm
 */

export default class IfcColour
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcColourVariant ) {}
}

export type IfcColourType = 'IfcColourSpecification'|'IfcPreDefinedColour';

export type IfcColourChoices = IfcColourSpecification|IfcPreDefinedColour;

export type IfcColourVariant = ({ type: 'IfcColourSpecification'; value: IfcColourSpecification }|{ type: 'IfcPreDefinedColour'; value: IfcPreDefinedColour }) & { type: IfcColourType; value: IfcColourChoices };

