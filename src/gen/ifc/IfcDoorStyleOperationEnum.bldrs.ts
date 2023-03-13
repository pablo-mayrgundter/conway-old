enum IfcDoorStyleOperationEnum {
    SINGLE_SWING_LEFT = 0,
    SINGLE_SWING_RIGHT = 1,
    DOUBLE_DOOR_SINGLE_SWING = 2,
    DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_LEFT = 3,
    DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_RIGHT = 4,
    DOUBLE_SWING_LEFT = 5,
    DOUBLE_SWING_RIGHT = 6,
    DOUBLE_DOOR_DOUBLE_SWING = 7,
    SLIDING_TO_LEFT = 8,
    SLIDING_TO_RIGHT = 9,
    DOUBLE_DOOR_SLIDING = 10,
    FOLDING_TO_LEFT = 11,
    FOLDING_TO_RIGHT = 12,
    DOUBLE_DOOR_FOLDING = 13,
    REVOLVING = 14,
    ROLLINGUP = 15,
    USERDEFINED = 16,
    NOTDEFINED = 17,
}
export { IfcDoorStyleOperationEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDoorStyleOperationEnum = new Int32Array( [6,1,21,-2,94] );

let prefixSumAddressIfcDoorStyleOperationEnum = new Uint32Array( [0,26,47,59,72,83,109,129,148,169,189,206,225,243,261,302,319,359,370] );

let slotMapIfcDoorStyleOperationEnum = new Int32Array( [7,13,17,16,14,2,6,5,10,1,11,0,12,9,4,8,3,15] );

let encodedDataIfcDoorStyleOperationEnum = (new TextEncoder()).encode( ".DOUBLE_DOOR_DOUBLE_SWING..DOUBLE_DOOR_FOLDING..NOTDEFINED..USERDEFINED..REVOLVING..DOUBLE_DOOR_SINGLE_SWING..DOUBLE_SWING_RIGHT..DOUBLE_SWING_LEFT..DOUBLE_DOOR_SLIDING..SINGLE_SWING_RIGHT..FOLDING_TO_LEFT..SINGLE_SWING_LEFT..FOLDING_TO_RIGHT..SLIDING_TO_RIGHT..DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_RIGHT..SLIDING_TO_LEFT..DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_LEFT..ROLLINGUP." );

let IfcDoorStyleOperationEnumSearch = new MinimalPerfectHash< IfcDoorStyleOperationEnum >( gMapIfcDoorStyleOperationEnum, prefixSumAddressIfcDoorStyleOperationEnum, slotMapIfcDoorStyleOperationEnum, encodedDataIfcDoorStyleOperationEnum );

export { IfcDoorStyleOperationEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDoorStyleOperationEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDoorStyleOperationEnum | undefined
{
    return parser.extract< IfcDoorStyleOperationEnum >( IfcDoorStyleOperationEnumSearch, input, cursor, endCursor );
}

