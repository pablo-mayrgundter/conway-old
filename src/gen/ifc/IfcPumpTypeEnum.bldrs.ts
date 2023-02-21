enum IfcPumpTypeEnum {
    CIRCULATOR = 0,
    ENDSUCTION = 1,
    SPLITCASE = 2,
    VERTICALINLINE = 3,
    VERTICALTURBINE = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export default IfcPumpTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPumpTypeEnum = new Int32Array( [90] );

let prefixSumAddressIfcPumpTypeEnum = new Uint32Array( [0,13,25,42,58,69,81,93] );

let slotMapIfcPumpTypeEnum = new Int32Array( [5,6,4,3,2,0,1] );

let encodedDataIfcPumpTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED..VERTICALTURBINE..VERTICALINLINE..SPLITCASE..CIRCULATOR..ENDSUCTION." );

let IfcPumpTypeEnumSearch = new MinimalPerfectHash< IfcPumpTypeEnum >( gMapIfcPumpTypeEnum, prefixSumAddressIfcPumpTypeEnum, slotMapIfcPumpTypeEnum, encodedDataIfcPumpTypeEnum );

export { IfcPumpTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPumpTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPumpTypeEnum | undefined
{
    return parser.parse< IfcPumpTypeEnum >( IfcPumpTypeEnumSearch, input, cursor, endCursor );
}

