enum IfcTimeSeriesScheduleTypeEnum {
    ANNUAL = 0,
    MONTHLY = 1,
    WEEKLY = 2,
    DAILY = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export default IfcTimeSeriesScheduleTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTimeSeriesScheduleTypeEnum = new Int32Array( [2] );

let prefixSumAddressIfcTimeSeriesScheduleTypeEnum = new Uint32Array( [0,7,15,23,32,44,57] );

let slotMapIfcTimeSeriesScheduleTypeEnum = new Int32Array( [3,2,0,1,5,4] );

let encodedDataIfcTimeSeriesScheduleTypeEnum = (new TextEncoder()).encode( ".DAILY..WEEKLY..ANNUAL..MONTHLY..NOTDEFINED..USERDEFINED." );

let IfcTimeSeriesScheduleTypeEnumSearch = new MinimalPerfectHash< IfcTimeSeriesScheduleTypeEnum >( gMapIfcTimeSeriesScheduleTypeEnum, prefixSumAddressIfcTimeSeriesScheduleTypeEnum, slotMapIfcTimeSeriesScheduleTypeEnum, encodedDataIfcTimeSeriesScheduleTypeEnum );

export { IfcTimeSeriesScheduleTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTimeSeriesScheduleTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTimeSeriesScheduleTypeEnum | undefined
{
    return parser.extract< IfcTimeSeriesScheduleTypeEnum >( IfcTimeSeriesScheduleTypeEnumSearch, input, cursor, endCursor );
}

