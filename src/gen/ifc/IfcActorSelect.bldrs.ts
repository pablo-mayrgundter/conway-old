
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactorselect.htm
 */

export default class IfcActorSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcActorSelectVariant ) {}
}

export type IfcActorSelectType = 'IfcOrganization'|'IfcPerson'|'IfcPersonAndOrganization';

export type IfcActorSelectChoices = IfcOrganization|IfcPerson|IfcPersonAndOrganization;

export type IfcActorSelectVariant = ({ type: 'IfcOrganization'; value: IfcOrganization }|{ type: 'IfcPerson'; value: IfcPerson }|{ type: 'IfcPersonAndOrganization'; value: IfcPersonAndOrganization }) & { type: IfcActorSelectType; value: IfcActorSelectChoices };

