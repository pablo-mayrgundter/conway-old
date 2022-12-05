
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentselect.htm
 */

export default class IfcDocumentSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcDocumentSelectVariant ) {}
}

export type IfcDocumentSelectType = 'IfcDocumentReference'|'IfcDocumentInformation';

export type IfcDocumentSelectChoices = IfcDocumentReference|IfcDocumentInformation;

export type IfcDocumentSelectVariant = ({ type: 'IfcDocumentReference'; value: IfcDocumentReference }|{ type: 'IfcDocumentInformation'; value: IfcDocumentInformation }) & { type: IfcDocumentSelectType; value: IfcDocumentSelectChoices };

