enum IfcProtectiveDeviceTypeEnum {
    FUSEDISCONNECTOR = 0,
    CIRCUITBREAKER = 1,
    EARTHFAILUREDEVICE = 2,
    RESIDUALCURRENTCIRCUITBREAKER = 3,
    RESIDUALCURRENTSWITCH = 4,
    VARISTOR = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcProtectiveDeviceTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcProtectiveDeviceTypeEnum = new Int32Array( [1,5,-2] );

let prefixSumAddressIfcProtectiveDeviceTypeEnum = new Uint32Array( [0,16,47,59,79,102,120,133,143] );

let slotMapIfcProtectiveDeviceTypeEnum = new Int32Array( [1,3,7,2,4,0,6,5] );

let encodedDataIfcProtectiveDeviceTypeEnum = (new TextEncoder()).encode( ".CIRCUITBREAKER..RESIDUALCURRENTCIRCUITBREAKER..NOTDEFINED..EARTHFAILUREDEVICE..RESIDUALCURRENTSWITCH..FUSEDISCONNECTOR..USERDEFINED..VARISTOR." );

let IfcProtectiveDeviceTypeEnumSearch = new MinimalPerfectHash< IfcProtectiveDeviceTypeEnum >( gMapIfcProtectiveDeviceTypeEnum, prefixSumAddressIfcProtectiveDeviceTypeEnum, slotMapIfcProtectiveDeviceTypeEnum, encodedDataIfcProtectiveDeviceTypeEnum );

export { IfcProtectiveDeviceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcProtectiveDeviceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcProtectiveDeviceTypeEnum | undefined
{
    return parser.extract< IfcProtectiveDeviceTypeEnum >( IfcProtectiveDeviceTypeEnumSearch, input, cursor, endCursor );
}
