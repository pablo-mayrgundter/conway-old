enum IfcProcedureTypeEnum {
    ADVICE_CAUTION = 0,
    ADVICE_NOTE = 1,
    ADVICE_WARNING = 2,
    CALIBRATION = 3,
    DIAGNOSTIC = 4,
    SHUTDOWN = 5,
    STARTUP = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export { IfcProcedureTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcProcedureTypeEnum = new Int32Array( [60,1,8] );

let prefixSumAddressIfcProcedureTypeEnum = new Uint32Array( [0,13,25,35,48,64,73,86,102,114] );

let slotMapIfcProcedureTypeEnum = new Int32Array( [1,4,5,3,2,6,7,0,8] );

let encodedDataIfcProcedureTypeEnum = (new TextEncoder()).encode( ".ADVICE_NOTE..DIAGNOSTIC..SHUTDOWN..CALIBRATION..ADVICE_WARNING..STARTUP..USERDEFINED..ADVICE_CAUTION..NOTDEFINED." );

let IfcProcedureTypeEnumSearch = new MinimalPerfectHash< IfcProcedureTypeEnum >( gMapIfcProcedureTypeEnum, prefixSumAddressIfcProcedureTypeEnum, slotMapIfcProcedureTypeEnum, encodedDataIfcProcedureTypeEnum );

export { IfcProcedureTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcProcedureTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcProcedureTypeEnum | undefined
{
    return parser.extract< IfcProcedureTypeEnum >( IfcProcedureTypeEnumSearch, input, cursor, endCursor );
}

