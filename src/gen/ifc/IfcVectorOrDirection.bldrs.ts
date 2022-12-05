
import IfcDirection from "./IfcDirection.bldrs"
import IfcVector from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvectorordirection.htm
 */

export default class IfcVectorOrDirection
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcVectorOrDirectionVariant ) {}
}

export type IfcVectorOrDirectionType = 'IfcDirection'|'IfcVector';

export type IfcVectorOrDirectionChoices = IfcDirection|IfcVector;

export type IfcVectorOrDirectionVariant = ({ type: 'IfcDirection'; value: IfcDirection }|{ type: 'IfcVector'; value: IfcVector }) & { type: IfcVectorOrDirectionType; value: IfcVectorOrDirectionChoices };

