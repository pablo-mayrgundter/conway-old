enum IfcVibrationIsolatorTypeEnum {
    COMPRESSION = 0,
    SPRING = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export { IfcVibrationIsolatorTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcVibrationIsolatorTypeEnum = new Int32Array( [19] );

let prefixSumAddressIfcVibrationIsolatorTypeEnum = new Uint32Array( [0,8,20,33,46] );

let slotMapIfcVibrationIsolatorTypeEnum = new Int32Array( [1,3,2,0] );

let encodedDataIfcVibrationIsolatorTypeEnum = (new TextEncoder()).encode( ".SPRING..NOTDEFINED..USERDEFINED..COMPRESSION." );

let IfcVibrationIsolatorTypeEnumSearch = new MinimalPerfectHash< IfcVibrationIsolatorTypeEnum >( gMapIfcVibrationIsolatorTypeEnum, prefixSumAddressIfcVibrationIsolatorTypeEnum, slotMapIfcVibrationIsolatorTypeEnum, encodedDataIfcVibrationIsolatorTypeEnum );

export { IfcVibrationIsolatorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcVibrationIsolatorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcVibrationIsolatorTypeEnum | undefined
{
    return parser.extract< IfcVibrationIsolatorTypeEnum >( IfcVibrationIsolatorTypeEnumSearch, input, cursor, endCursor );
}

