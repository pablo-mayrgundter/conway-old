
import IfcClosedShell from "./IfcClosedShell.bldrs"
import IfcOpenShell from "./IfcOpenShell.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshell.htm
 */

export default class IfcShell
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcShellVariant ) {}
}

export type IfcShellType = 'IfcClosedShell'|'IfcOpenShell';

export type IfcShellChoices = IfcClosedShell|IfcOpenShell;

export type IfcShellVariant = ({ type: 'IfcClosedShell'; value: IfcClosedShell }|{ type: 'IfcOpenShell'; value: IfcOpenShell }) & { type: IfcShellType; value: IfcShellChoices };

