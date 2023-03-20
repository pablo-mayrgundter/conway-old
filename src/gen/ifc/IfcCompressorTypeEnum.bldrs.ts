enum IfcCompressorTypeEnum {
    DYNAMIC = 0,
    RECIPROCATING = 1,
    ROTARY = 2,
    SCROLL = 3,
    TROCHOIDAL = 4,
    SINGLESTAGE = 5,
    BOOSTER = 6,
    OPENTYPE = 7,
    HERMETIC = 8,
    SEMIHERMETIC = 9,
    WELDEDSHELLHERMETIC = 10,
    ROLLINGPISTON = 11,
    ROTARYVANE = 12,
    SINGLESCREW = 13,
    TWINSCREW = 14,
    USERDEFINED = 15,
    NOTDEFINED = 16,
}
export { IfcCompressorTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCompressorTypeEnum = new Int32Array( [270,597,74,8] );

let prefixSumAddressIfcCompressorTypeEnum = new Uint32Array( [0,12,33,48,56,69,82,90,100,111,123,138,147,157,170,184,196,205] );

let slotMapIfcCompressorTypeEnum = new Int32Array( [12,10,1,2,5,15,3,8,14,4,11,6,7,13,9,16,0] );

let encodedDataIfcCompressorTypeEnum = (new TextEncoder()).encode( ".ROTARYVANE..WELDEDSHELLHERMETIC..RECIPROCATING..ROTARY..SINGLESTAGE..USERDEFINED..SCROLL..HERMETIC..TWINSCREW..TROCHOIDAL..ROLLINGPISTON..BOOSTER..OPENTYPE..SINGLESCREW..SEMIHERMETIC..NOTDEFINED..DYNAMIC." );

let IfcCompressorTypeEnumSearch = new MinimalPerfectHash< IfcCompressorTypeEnum >( gMapIfcCompressorTypeEnum, prefixSumAddressIfcCompressorTypeEnum, slotMapIfcCompressorTypeEnum, encodedDataIfcCompressorTypeEnum );

export { IfcCompressorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCompressorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCompressorTypeEnum | undefined
{
    return parser.extract< IfcCompressorTypeEnum >( IfcCompressorTypeEnumSearch, input, cursor, endCursor );
}
