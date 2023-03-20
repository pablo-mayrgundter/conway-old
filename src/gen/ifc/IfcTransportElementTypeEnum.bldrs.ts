enum IfcTransportElementTypeEnum {
    ELEVATOR = 0,
    ESCALATOR = 1,
    MOVINGWALKWAY = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcTransportElementTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTransportElementTypeEnum = new Int32Array( [6] );

let prefixSumAddressIfcTransportElementTypeEnum = new Uint32Array( [0,13,24,36,46,61] );

let slotMapIfcTransportElementTypeEnum = new Int32Array( [3,1,4,0,2] );

let encodedDataIfcTransportElementTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..ESCALATOR..NOTDEFINED..ELEVATOR..MOVINGWALKWAY." );

let IfcTransportElementTypeEnumSearch = new MinimalPerfectHash< IfcTransportElementTypeEnum >( gMapIfcTransportElementTypeEnum, prefixSumAddressIfcTransportElementTypeEnum, slotMapIfcTransportElementTypeEnum, encodedDataIfcTransportElementTypeEnum );

export { IfcTransportElementTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTransportElementTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTransportElementTypeEnum | undefined
{
    return parser.extract< IfcTransportElementTypeEnum >( IfcTransportElementTypeEnumSearch, input, cursor, endCursor );
}
