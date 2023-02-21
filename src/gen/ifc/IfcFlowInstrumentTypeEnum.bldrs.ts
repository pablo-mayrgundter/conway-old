enum IfcFlowInstrumentTypeEnum {
    PRESSUREGAUGE = 0,
    THERMOMETER = 1,
    AMMETER = 2,
    FREQUENCYMETER = 3,
    POWERFACTORMETER = 4,
    PHASEANGLEMETER = 5,
    VOLTMETER_PEAK = 6,
    VOLTMETER_RMS = 7,
    USERDEFINED = 8,
    NOTDEFINED = 9,
}
export default IfcFlowInstrumentTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcFlowInstrumentTypeEnum = new Int32Array( [2,4,104] );

let prefixSumAddressIfcFlowInstrumentTypeEnum = new Uint32Array( [0,16,28,43,61,74,91,107,122,131,144] );

let slotMapIfcFlowInstrumentTypeEnum = new Int32Array( [6,9,7,4,1,5,3,0,2,8] );

let encodedDataIfcFlowInstrumentTypeEnum = (new TextEncoder()).encode( ".VOLTMETER_PEAK..NOTDEFINED..VOLTMETER_RMS..POWERFACTORMETER..THERMOMETER..PHASEANGLEMETER..FREQUENCYMETER..PRESSUREGAUGE..AMMETER..USERDEFINED." );

let IfcFlowInstrumentTypeEnumSearch = new MinimalPerfectHash< IfcFlowInstrumentTypeEnum >( gMapIfcFlowInstrumentTypeEnum, prefixSumAddressIfcFlowInstrumentTypeEnum, slotMapIfcFlowInstrumentTypeEnum, encodedDataIfcFlowInstrumentTypeEnum );

export { IfcFlowInstrumentTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcFlowInstrumentTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcFlowInstrumentTypeEnum | undefined
{
    return parser.parse< IfcFlowInstrumentTypeEnum >( IfcFlowInstrumentTypeEnumSearch, input, cursor, endCursor );
}

