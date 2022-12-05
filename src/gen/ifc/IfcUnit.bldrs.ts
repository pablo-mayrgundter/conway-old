
import IfcDerivedUnit from "./IfcDerivedUnit.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunit.htm
 */

export default class IfcUnit
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcUnitVariant ) {}
}

export type IfcUnitType = 'IfcDerivedUnit'|'IfcNamedUnit'|'IfcMonetaryUnit';

export type IfcUnitChoices = IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit;

export type IfcUnitVariant = ({ type: 'IfcDerivedUnit'; value: IfcDerivedUnit }|{ type: 'IfcNamedUnit'; value: IfcNamedUnit }|{ type: 'IfcMonetaryUnit'; value: IfcMonetaryUnit }) & { type: IfcUnitType; value: IfcUnitChoices };

