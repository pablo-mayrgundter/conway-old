enum IfcBeamTypeEnum {
    BEAM = 0,
    JOIST = 1,
    LINTEL = 2,
    T_BEAM = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export { IfcBeamTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBeamTypeEnum = new Int32Array( [73] );

let prefixSumAddressIfcBeamTypeEnum = new Uint32Array( [0,7,19,25,38,46,54] );

let slotMapIfcBeamTypeEnum = new Int32Array( [1,5,0,4,3,2] );

let encodedDataIfcBeamTypeEnum = (new TextEncoder()).encode( ".JOIST..NOTDEFINED..BEAM..USERDEFINED..T_BEAM..LINTEL." );

let IfcBeamTypeEnumSearch = new MinimalPerfectHash< IfcBeamTypeEnum >( gMapIfcBeamTypeEnum, prefixSumAddressIfcBeamTypeEnum, slotMapIfcBeamTypeEnum, encodedDataIfcBeamTypeEnum );

export { IfcBeamTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBeamTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBeamTypeEnum | undefined
{
    return parser.extract< IfcBeamTypeEnum >( IfcBeamTypeEnumSearch, input, cursor, endCursor );
}
