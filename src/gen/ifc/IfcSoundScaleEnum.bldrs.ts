enum IfcSoundScaleEnum {
    DBA = 0,
    DBB = 1,
    DBC = 2,
    NC = 3,
    NR = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcSoundScaleEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSoundScaleEnum = new Int32Array( [127] );

let prefixSumAddressIfcSoundScaleEnum = new Uint32Array( [0,5,18,23,27,31,43,48] );

let slotMapIfcSoundScaleEnum = new Int32Array( [2,5,1,3,4,6,0] );

let encodedDataIfcSoundScaleEnum = (new TextEncoder()).encode( ".DBC..USERDEFINED..DBB..NC..NR..NOTDEFINED..DBA." );

let IfcSoundScaleEnumSearch = new MinimalPerfectHash< IfcSoundScaleEnum >( gMapIfcSoundScaleEnum, prefixSumAddressIfcSoundScaleEnum, slotMapIfcSoundScaleEnum, encodedDataIfcSoundScaleEnum );

export { IfcSoundScaleEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSoundScaleEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSoundScaleEnum | undefined
{
    return parser.extract< IfcSoundScaleEnum >( IfcSoundScaleEnumSearch, input, cursor, endCursor );
}
