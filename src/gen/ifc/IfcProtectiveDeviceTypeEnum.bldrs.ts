enum IfcProtectiveDeviceTypeEnum {
    CIRCUITBREAKER = 0,
    EARTHLEAKAGECIRCUITBREAKER = 1,
    EARTHINGSWITCH = 2,
    FUSEDISCONNECTOR = 3,
    RESIDUALCURRENTCIRCUITBREAKER = 4,
    RESIDUALCURRENTSWITCH = 5,
    VARISTOR = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
const IfcProtectiveDeviceTypeEnumCount = 9;

export { IfcProtectiveDeviceTypeEnum, IfcProtectiveDeviceTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcProtectiveDeviceTypeEnum = new Int32Array( [4,1,-3] );

let prefixSumAddressIfcProtectiveDeviceTypeEnum = new Uint32Array( [0,16,26,44,56,84,100,131,154,167] );

let slotMapIfcProtectiveDeviceTypeEnum = new Int32Array( [2,6,3,8,1,0,4,5,7] );

let encodedDataIfcProtectiveDeviceTypeEnum = (new TextEncoder()).encode( ".EARTHINGSWITCH..VARISTOR..FUSEDISCONNECTOR..NOTDEFINED..EARTHLEAKAGECIRCUITBREAKER..CIRCUITBREAKER..RESIDUALCURRENTCIRCUITBREAKER..RESIDUALCURRENTSWITCH..USERDEFINED." );

let IfcProtectiveDeviceTypeEnumSearch = new MinimalPerfectHash< IfcProtectiveDeviceTypeEnum >( gMapIfcProtectiveDeviceTypeEnum, prefixSumAddressIfcProtectiveDeviceTypeEnum, slotMapIfcProtectiveDeviceTypeEnum, encodedDataIfcProtectiveDeviceTypeEnum );

export { IfcProtectiveDeviceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcProtectiveDeviceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcProtectiveDeviceTypeEnum | undefined
{
    return parser.extract< IfcProtectiveDeviceTypeEnum >( IfcProtectiveDeviceTypeEnumSearch, input, cursor, endCursor );
}
