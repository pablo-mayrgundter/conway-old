enum IfcLampTypeEnum {
    COMPACTFLUORESCENT = 0,
    FLUORESCENT = 1,
    HIGHPRESSUREMERCURY = 2,
    HIGHPRESSURESODIUM = 3,
    METALHALIDE = 4,
    TUNGSTENFILAMENT = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcLampTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcLampTypeEnum = new Int32Array( [-5,27,5] );

let prefixSumAddressIfcLampTypeEnum = new Uint32Array( [0,13,31,51,64,85,98,118,130] );

let slotMapIfcLampTypeEnum = new Int32Array( [1,5,0,4,2,6,3,7] );

let encodedDataIfcLampTypeEnum = (new TextEncoder()).encode( ".FLUORESCENT..TUNGSTENFILAMENT..COMPACTFLUORESCENT..METALHALIDE..HIGHPRESSUREMERCURY..USERDEFINED..HIGHPRESSURESODIUM..NOTDEFINED." );

let IfcLampTypeEnumSearch = new MinimalPerfectHash< IfcLampTypeEnum >( gMapIfcLampTypeEnum, prefixSumAddressIfcLampTypeEnum, slotMapIfcLampTypeEnum, encodedDataIfcLampTypeEnum );

export { IfcLampTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcLampTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcLampTypeEnum | undefined
{
    return parser.extract< IfcLampTypeEnum >( IfcLampTypeEnumSearch, input, cursor, endCursor );
}

