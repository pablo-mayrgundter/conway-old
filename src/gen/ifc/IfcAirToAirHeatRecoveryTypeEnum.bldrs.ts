enum IfcAirToAirHeatRecoveryTypeEnum {
    FIXEDPLATECOUNTERFLOWEXCHANGER = 0,
    FIXEDPLATECROSSFLOWEXCHANGER = 1,
    FIXEDPLATEPARALLELFLOWEXCHANGER = 2,
    ROTARYWHEEL = 3,
    RUNAROUNDCOILLOOP = 4,
    HEATPIPE = 5,
    TWINTOWERENTHALPYRECOVERYLOOPS = 6,
    THERMOSIPHONSEALEDTUBEHEATEXCHANGERS = 7,
    THERMOSIPHONCOILTYPEHEATEXCHANGERS = 8,
    USERDEFINED = 9,
    NOTDEFINED = 10,
}
const IfcAirToAirHeatRecoveryTypeEnumCount = 11;

export { IfcAirToAirHeatRecoveryTypeEnum, IfcAirToAirHeatRecoveryTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAirToAirHeatRecoveryTypeEnum = new Int32Array( [36,-5,5] );

let prefixSumAddressIfcAirToAirHeatRecoveryTypeEnum = new Uint32Array( [0,32,45,77,110,120,150,186,199,218,256,268] );

let slotMapIfcAirToAirHeatRecoveryTypeEnum = new Int32Array( [0,9,6,2,5,1,8,3,4,7,10] );

let encodedDataIfcAirToAirHeatRecoveryTypeEnum = (new TextEncoder()).encode( ".FIXEDPLATECOUNTERFLOWEXCHANGER..USERDEFINED..TWINTOWERENTHALPYRECOVERYLOOPS..FIXEDPLATEPARALLELFLOWEXCHANGER..HEATPIPE..FIXEDPLATECROSSFLOWEXCHANGER..THERMOSIPHONCOILTYPEHEATEXCHANGERS..ROTARYWHEEL..RUNAROUNDCOILLOOP..THERMOSIPHONSEALEDTUBEHEATEXCHANGERS..NOTDEFINED." );

let IfcAirToAirHeatRecoveryTypeEnumSearch = new MinimalPerfectHash< IfcAirToAirHeatRecoveryTypeEnum >( gMapIfcAirToAirHeatRecoveryTypeEnum, prefixSumAddressIfcAirToAirHeatRecoveryTypeEnum, slotMapIfcAirToAirHeatRecoveryTypeEnum, encodedDataIfcAirToAirHeatRecoveryTypeEnum );

export { IfcAirToAirHeatRecoveryTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAirToAirHeatRecoveryTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAirToAirHeatRecoveryTypeEnum | undefined
{
    return parser.extract< IfcAirToAirHeatRecoveryTypeEnum >( IfcAirToAirHeatRecoveryTypeEnumSearch, input, cursor, endCursor );
}
