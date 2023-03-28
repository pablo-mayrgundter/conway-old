enum IfcUnitaryControlElementTypeEnum {
    ALARMPANEL = 0,
    CONTROLPANEL = 1,
    GASDETECTIONPANEL = 2,
    INDICATORPANEL = 3,
    MIMICPANEL = 4,
    HUMIDISTAT = 5,
    THERMOSTAT = 6,
    WEATHERSTATION = 7,
    USERDEFINED = 8,
    NOTDEFINED = 9,
}
export { IfcUnitaryControlElementTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcUnitaryControlElementTypeEnum = new Int32Array( [-4,5,64] );

let prefixSumAddressIfcUnitaryControlElementTypeEnum = new Uint32Array( [0,12,26,38,54,67,79,91,110,122,138] );

let slotMapIfcUnitaryControlElementTypeEnum = new Int32Array( [9,1,4,7,8,6,0,2,5,3] );

let encodedDataIfcUnitaryControlElementTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..CONTROLPANEL..MIMICPANEL..WEATHERSTATION..USERDEFINED..THERMOSTAT..ALARMPANEL..GASDETECTIONPANEL..HUMIDISTAT..INDICATORPANEL." );

let IfcUnitaryControlElementTypeEnumSearch = new MinimalPerfectHash< IfcUnitaryControlElementTypeEnum >( gMapIfcUnitaryControlElementTypeEnum, prefixSumAddressIfcUnitaryControlElementTypeEnum, slotMapIfcUnitaryControlElementTypeEnum, encodedDataIfcUnitaryControlElementTypeEnum );

export { IfcUnitaryControlElementTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcUnitaryControlElementTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcUnitaryControlElementTypeEnum | undefined
{
    return parser.extract< IfcUnitaryControlElementTypeEnum >( IfcUnitaryControlElementTypeEnumSearch, input, cursor, endCursor );
}
