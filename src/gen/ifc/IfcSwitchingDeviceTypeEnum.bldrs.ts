enum IfcSwitchingDeviceTypeEnum {
    CONTACTOR = 0,
    EMERGENCYSTOP = 1,
    STARTER = 2,
    SWITCHDISCONNECTOR = 3,
    TOGGLESWITCH = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcSwitchingDeviceTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSwitchingDeviceTypeEnum = new Int32Array( [95] );

let prefixSumAddressIfcSwitchingDeviceTypeEnum = new Uint32Array( [0,12,21,32,52,66,81,94] );

let slotMapIfcSwitchingDeviceTypeEnum = new Int32Array( [6,2,0,3,4,1,5] );

let encodedDataIfcSwitchingDeviceTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..STARTER..CONTACTOR..SWITCHDISCONNECTOR..TOGGLESWITCH..EMERGENCYSTOP..USERDEFINED." );

let IfcSwitchingDeviceTypeEnumSearch = new MinimalPerfectHash< IfcSwitchingDeviceTypeEnum >( gMapIfcSwitchingDeviceTypeEnum, prefixSumAddressIfcSwitchingDeviceTypeEnum, slotMapIfcSwitchingDeviceTypeEnum, encodedDataIfcSwitchingDeviceTypeEnum );

export { IfcSwitchingDeviceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSwitchingDeviceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSwitchingDeviceTypeEnum | undefined
{
    return parser.extract< IfcSwitchingDeviceTypeEnum >( IfcSwitchingDeviceTypeEnumSearch, input, cursor, endCursor );
}
