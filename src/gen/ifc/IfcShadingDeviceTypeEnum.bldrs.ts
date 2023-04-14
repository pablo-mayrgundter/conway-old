enum IfcShadingDeviceTypeEnum {
    JALOUSIE = 0,
    SHUTTER = 1,
    AWNING = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
const IfcShadingDeviceTypeEnumCount = 5;

export { IfcShadingDeviceTypeEnum, IfcShadingDeviceTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcShadingDeviceTypeEnum = new Int32Array( [6] );

let prefixSumAddressIfcShadingDeviceTypeEnum = new Uint32Array( [0,13,22,34,44,52] );

let slotMapIfcShadingDeviceTypeEnum = new Int32Array( [3,1,4,0,2] );

let encodedDataIfcShadingDeviceTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..SHUTTER..NOTDEFINED..JALOUSIE..AWNING." );

let IfcShadingDeviceTypeEnumSearch = new MinimalPerfectHash< IfcShadingDeviceTypeEnum >( gMapIfcShadingDeviceTypeEnum, prefixSumAddressIfcShadingDeviceTypeEnum, slotMapIfcShadingDeviceTypeEnum, encodedDataIfcShadingDeviceTypeEnum );

export { IfcShadingDeviceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcShadingDeviceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcShadingDeviceTypeEnum | undefined
{
    return parser.extract< IfcShadingDeviceTypeEnum >( IfcShadingDeviceTypeEnumSearch, input, cursor, endCursor );
}
