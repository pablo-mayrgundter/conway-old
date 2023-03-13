enum IfcFlowMeterTypeEnum {
    ELECTRICMETER = 0,
    ENERGYMETER = 1,
    FLOWMETER = 2,
    GASMETER = 3,
    OILMETER = 4,
    WATERMETER = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcFlowMeterTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcFlowMeterTypeEnum = new Int32Array( [1,0,82] );

let prefixSumAddressIfcFlowMeterTypeEnum = new Uint32Array( [0,13,23,34,49,61,73,86,96] );

let slotMapIfcFlowMeterTypeEnum = new Int32Array( [1,3,2,0,5,7,6,4] );

let encodedDataIfcFlowMeterTypeEnum = (new TextEncoder()).encode( ".ENERGYMETER..GASMETER..FLOWMETER..ELECTRICMETER..WATERMETER..NOTDEFINED..USERDEFINED..OILMETER." );

let IfcFlowMeterTypeEnumSearch = new MinimalPerfectHash< IfcFlowMeterTypeEnum >( gMapIfcFlowMeterTypeEnum, prefixSumAddressIfcFlowMeterTypeEnum, slotMapIfcFlowMeterTypeEnum, encodedDataIfcFlowMeterTypeEnum );

export { IfcFlowMeterTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcFlowMeterTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcFlowMeterTypeEnum | undefined
{
    return parser.extract< IfcFlowMeterTypeEnum >( IfcFlowMeterTypeEnumSearch, input, cursor, endCursor );
}

