
import IfcLibraryReference from "./IfcLibraryReference.bldrs"
import IfcLibraryInformation from "./IfcLibraryInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryselect.htm
 */

export default class IfcLibrarySelect
{
    constructor( public readonly value: IfcLibrarySelectVariant ) {}
}

export type IfcLibrarySelectType = 'IfcLibraryReference'|'IfcLibraryInformation';

export type IfcLibrarySelectChoices = IfcLibraryReference|IfcLibraryInformation;

export type IfcLibrarySelectVariant = ({ type: 'IfcLibraryReference'; value: IfcLibraryReference }|{ type: 'IfcLibraryInformation'; value: IfcLibraryInformation }) & { type: IfcLibrarySelectType; value: IfcLibrarySelectChoices };

export function IfcLibrarySelectSerializer( value?: IfcLibrarySelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
