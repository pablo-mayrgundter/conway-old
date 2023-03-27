enum IfcAudioVisualApplianceTypeEnum {
    AMPLIFIER = 0,
    CAMERA = 1,
    DISPLAY = 2,
    MICROPHONE = 3,
    PLAYER = 4,
    PROJECTOR = 5,
    RECEIVER = 6,
    SPEAKER = 7,
    SWITCHER = 8,
    TELEPHONE = 9,
    TUNER = 10,
    USERDEFINED = 11,
    NOTDEFINED = 12,
}
export { IfcAudioVisualApplianceTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAudioVisualApplianceTypeEnum = new Int32Array( [5,345,71,5] );

let prefixSumAddressIfcAudioVisualApplianceTypeEnum = new Uint32Array( [0,7,19,30,43,51,62,74,83,93,102,113,121,131] );

let slotMapIfcAudioVisualApplianceTypeEnum = new Int32Array( [10,12,9,11,1,0,3,7,6,2,5,4,8] );

let encodedDataIfcAudioVisualApplianceTypeEnum = (new TextEncoder()).encode( ".TUNER..NOTDEFINED..TELEPHONE..USERDEFINED..CAMERA..AMPLIFIER..MICROPHONE..SPEAKER..RECEIVER..DISPLAY..PROJECTOR..PLAYER..SWITCHER." );

let IfcAudioVisualApplianceTypeEnumSearch = new MinimalPerfectHash< IfcAudioVisualApplianceTypeEnum >( gMapIfcAudioVisualApplianceTypeEnum, prefixSumAddressIfcAudioVisualApplianceTypeEnum, slotMapIfcAudioVisualApplianceTypeEnum, encodedDataIfcAudioVisualApplianceTypeEnum );

export { IfcAudioVisualApplianceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAudioVisualApplianceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAudioVisualApplianceTypeEnum | undefined
{
    return parser.extract< IfcAudioVisualApplianceTypeEnum >( IfcAudioVisualApplianceTypeEnumSearch, input, cursor, endCursor );
}
