enum IfcRampTypeEnum {
    STRAIGHT_RUN_RAMP = 0,
    TWO_STRAIGHT_RUN_RAMP = 1,
    QUARTER_TURN_RAMP = 2,
    TWO_QUARTER_TURN_RAMP = 3,
    HALF_TURN_RAMP = 4,
    SPIRAL_RAMP = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcRampTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcRampTypeEnum = new Int32Array( [-2,0,7] );

let prefixSumAddressIfcRampTypeEnum = new Uint32Array( [0,13,29,42,61,73,92,115,138] );

let slotMapIfcRampTypeEnum = new Int32Array( [5,4,6,0,7,2,1,3] );

let encodedDataIfcRampTypeEnum = (new TextEncoder()).encode( ".SPIRAL_RAMP..HALF_TURN_RAMP..USERDEFINED..STRAIGHT_RUN_RAMP..NOTDEFINED..QUARTER_TURN_RAMP..TWO_STRAIGHT_RUN_RAMP..TWO_QUARTER_TURN_RAMP." );

let IfcRampTypeEnumSearch = new MinimalPerfectHash< IfcRampTypeEnum >( gMapIfcRampTypeEnum, prefixSumAddressIfcRampTypeEnum, slotMapIfcRampTypeEnum, encodedDataIfcRampTypeEnum );

export { IfcRampTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcRampTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcRampTypeEnum | undefined
{
    return parser.extract< IfcRampTypeEnum >( IfcRampTypeEnumSearch, input, cursor, endCursor );
}

