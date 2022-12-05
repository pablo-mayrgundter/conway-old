
import IfcSolidModel from "./IfcSolidModel.bldrs"
import IfcHalfSpaceSolid from "./IfcHalfSpaceSolid.bldrs"
import IfcBooleanResult from "./IfcBooleanResult.bldrs"
import IfcCsgPrimitive3D from "./IfcCsgPrimitive3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanoperand.htm
 */

export default class IfcBooleanOperand
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcBooleanOperandVariant ) {}
}

export type IfcBooleanOperandType = 'IfcSolidModel'|'IfcHalfSpaceSolid'|'IfcBooleanResult'|'IfcCsgPrimitive3D';

export type IfcBooleanOperandChoices = IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;

export type IfcBooleanOperandVariant = ({ type: 'IfcSolidModel'; value: IfcSolidModel }|{ type: 'IfcHalfSpaceSolid'; value: IfcHalfSpaceSolid }|{ type: 'IfcBooleanResult'; value: IfcBooleanResult }|{ type: 'IfcCsgPrimitive3D'; value: IfcCsgPrimitive3D }) & { type: IfcBooleanOperandType; value: IfcBooleanOperandChoices };

