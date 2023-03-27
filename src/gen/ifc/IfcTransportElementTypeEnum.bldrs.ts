enum IfcTransportElementTypeEnum {
    ELEVATOR = 0,
    ESCALATOR = 1,
    MOVINGWALKWAY = 2,
    CRANEWAY = 3,
    LIFTINGGEAR = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcTransportElementTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTransportElementTypeEnum = new Int32Array( [184] );

let prefixSumAddressIfcTransportElementTypeEnum = new Uint32Array( [0,15,28,40,53,63,74,84] );

let slotMapIfcTransportElementTypeEnum = new Int32Array( [2,5,6,4,0,1,3] );

let encodedDataIfcTransportElementTypeEnum = (new TextEncoder()).encode( ".MOVINGWALKWAY..USERDEFINED..NOTDEFINED..LIFTINGGEAR..ELEVATOR..ESCALATOR..CRANEWAY." );

let IfcTransportElementTypeEnumSearch = new MinimalPerfectHash< IfcTransportElementTypeEnum >( gMapIfcTransportElementTypeEnum, prefixSumAddressIfcTransportElementTypeEnum, slotMapIfcTransportElementTypeEnum, encodedDataIfcTransportElementTypeEnum );

export { IfcTransportElementTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTransportElementTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTransportElementTypeEnum | undefined
{
    return parser.extract< IfcTransportElementTypeEnum >( IfcTransportElementTypeEnumSearch, input, cursor, endCursor );
}
