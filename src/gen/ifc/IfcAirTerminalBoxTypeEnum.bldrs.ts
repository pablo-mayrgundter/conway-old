enum IfcAirTerminalBoxTypeEnum {
    CONSTANTFLOW = 0,
    VARIABLEFLOWPRESSUREDEPENDANT = 1,
    VARIABLEFLOWPRESSUREINDEPENDANT = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcAirTerminalBoxTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAirTerminalBoxTypeEnum = new Int32Array( [3] );

let prefixSumAddressIfcAirTerminalBoxTypeEnum = new Uint32Array( [0,13,27,60,72,103] );

let slotMapIfcAirTerminalBoxTypeEnum = new Int32Array( [3,0,2,4,1] );

let encodedDataIfcAirTerminalBoxTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..CONSTANTFLOW..VARIABLEFLOWPRESSUREINDEPENDANT..NOTDEFINED..VARIABLEFLOWPRESSUREDEPENDANT." );

let IfcAirTerminalBoxTypeEnumSearch = new MinimalPerfectHash< IfcAirTerminalBoxTypeEnum >( gMapIfcAirTerminalBoxTypeEnum, prefixSumAddressIfcAirTerminalBoxTypeEnum, slotMapIfcAirTerminalBoxTypeEnum, encodedDataIfcAirTerminalBoxTypeEnum );

export { IfcAirTerminalBoxTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAirTerminalBoxTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAirTerminalBoxTypeEnum | undefined
{
    return parser.extract< IfcAirTerminalBoxTypeEnum >( IfcAirTerminalBoxTypeEnumSearch, input, cursor, endCursor );
}

