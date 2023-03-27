enum IfcSwitchingDeviceTypeEnum {
    CONTACTOR = 0,
    DIMMERSWITCH = 1,
    EMERGENCYSTOP = 2,
    KEYPAD = 3,
    MOMENTARYSWITCH = 4,
    SELECTORSWITCH = 5,
    STARTER = 6,
    SWITCHDISCONNECTOR = 7,
    TOGGLESWITCH = 8,
    USERDEFINED = 9,
    NOTDEFINED = 10,
}
export { IfcSwitchingDeviceTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSwitchingDeviceTypeEnum = new Int32Array( [6,42,79] );

let prefixSumAddressIfcSwitchingDeviceTypeEnum = new Uint32Array( [0,9,24,36,47,61,75,92,100,116,136,149] );

let slotMapIfcSwitchingDeviceTypeEnum = new Int32Array( [6,2,10,0,8,1,4,3,5,7,9] );

let encodedDataIfcSwitchingDeviceTypeEnum = (new TextEncoder()).encode( ".STARTER..EMERGENCYSTOP..NOTDEFINED..CONTACTOR..TOGGLESWITCH..DIMMERSWITCH..MOMENTARYSWITCH..KEYPAD..SELECTORSWITCH..SWITCHDISCONNECTOR..USERDEFINED." );

let IfcSwitchingDeviceTypeEnumSearch = new MinimalPerfectHash< IfcSwitchingDeviceTypeEnum >( gMapIfcSwitchingDeviceTypeEnum, prefixSumAddressIfcSwitchingDeviceTypeEnum, slotMapIfcSwitchingDeviceTypeEnum, encodedDataIfcSwitchingDeviceTypeEnum );

export { IfcSwitchingDeviceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSwitchingDeviceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSwitchingDeviceTypeEnum | undefined
{
    return parser.extract< IfcSwitchingDeviceTypeEnum >( IfcSwitchingDeviceTypeEnumSearch, input, cursor, endCursor );
}
