enum IfcRampFlightTypeEnum {
    STRAIGHT = 0,
    SPIRAL = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export { IfcRampFlightTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcRampFlightTypeEnum = new Int32Array( [22] );

let prefixSumAddressIfcRampFlightTypeEnum = new Uint32Array( [0,10,23,31,43] );

let slotMapIfcRampFlightTypeEnum = new Int32Array( [0,2,1,3] );

let encodedDataIfcRampFlightTypeEnum = (new TextEncoder()).encode( ".STRAIGHT..USERDEFINED..SPIRAL..NOTDEFINED." );

let IfcRampFlightTypeEnumSearch = new MinimalPerfectHash< IfcRampFlightTypeEnum >( gMapIfcRampFlightTypeEnum, prefixSumAddressIfcRampFlightTypeEnum, slotMapIfcRampFlightTypeEnum, encodedDataIfcRampFlightTypeEnum );

export { IfcRampFlightTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcRampFlightTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcRampFlightTypeEnum | undefined
{
    return parser.extract< IfcRampFlightTypeEnum >( IfcRampFlightTypeEnumSearch, input, cursor, endCursor );
}

