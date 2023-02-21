enum IfcCableSegmentTypeEnum {
    CABLESEGMENT = 0,
    CONDUCTORSEGMENT = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export default IfcCableSegmentTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCableSegmentTypeEnum = new Int32Array( [10] );

let prefixSumAddressIfcCableSegmentTypeEnum = new Uint32Array( [0,13,27,45,57] );

let slotMapIfcCableSegmentTypeEnum = new Int32Array( [2,0,1,3] );

let encodedDataIfcCableSegmentTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..CABLESEGMENT..CONDUCTORSEGMENT..NOTDEFINED." );

let IfcCableSegmentTypeEnumSearch = new MinimalPerfectHash< IfcCableSegmentTypeEnum >( gMapIfcCableSegmentTypeEnum, prefixSumAddressIfcCableSegmentTypeEnum, slotMapIfcCableSegmentTypeEnum, encodedDataIfcCableSegmentTypeEnum );

export { IfcCableSegmentTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCableSegmentTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCableSegmentTypeEnum | undefined
{
    return parser.parse< IfcCableSegmentTypeEnum >( IfcCableSegmentTypeEnumSearch, input, cursor, endCursor );
}

