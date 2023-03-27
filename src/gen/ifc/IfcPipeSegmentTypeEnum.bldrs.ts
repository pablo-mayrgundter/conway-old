enum IfcPipeSegmentTypeEnum {
    CULVERT = 0,
    FLEXIBLESEGMENT = 1,
    RIGIDSEGMENT = 2,
    GUTTER = 3,
    SPOOL = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcPipeSegmentTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPipeSegmentTypeEnum = new Int32Array( [293] );

let prefixSumAddressIfcPipeSegmentTypeEnum = new Uint32Array( [0,17,26,33,41,53,67,80] );

let slotMapIfcPipeSegmentTypeEnum = new Int32Array( [1,0,4,3,6,2,5] );

let encodedDataIfcPipeSegmentTypeEnum = (new TextEncoder()).encode( ".FLEXIBLESEGMENT..CULVERT..SPOOL..GUTTER..NOTDEFINED..RIGIDSEGMENT..USERDEFINED." );

let IfcPipeSegmentTypeEnumSearch = new MinimalPerfectHash< IfcPipeSegmentTypeEnum >( gMapIfcPipeSegmentTypeEnum, prefixSumAddressIfcPipeSegmentTypeEnum, slotMapIfcPipeSegmentTypeEnum, encodedDataIfcPipeSegmentTypeEnum );

export { IfcPipeSegmentTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPipeSegmentTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPipeSegmentTypeEnum | undefined
{
    return parser.extract< IfcPipeSegmentTypeEnum >( IfcPipeSegmentTypeEnumSearch, input, cursor, endCursor );
}
