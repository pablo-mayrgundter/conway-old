enum IfcPipeSegmentTypeEnum {
    FLEXIBLESEGMENT = 0,
    RIGIDSEGMENT = 1,
    GUTTER = 2,
    SPOOL = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export { IfcPipeSegmentTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPipeSegmentTypeEnum = new Int32Array( [245] );

let prefixSumAddressIfcPipeSegmentTypeEnum = new Uint32Array( [0,12,29,37,51,58,71] );

let slotMapIfcPipeSegmentTypeEnum = new Int32Array( [5,0,2,1,3,4] );

let encodedDataIfcPipeSegmentTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..FLEXIBLESEGMENT..GUTTER..RIGIDSEGMENT..SPOOL..USERDEFINED." );

let IfcPipeSegmentTypeEnumSearch = new MinimalPerfectHash< IfcPipeSegmentTypeEnum >( gMapIfcPipeSegmentTypeEnum, prefixSumAddressIfcPipeSegmentTypeEnum, slotMapIfcPipeSegmentTypeEnum, encodedDataIfcPipeSegmentTypeEnum );

export { IfcPipeSegmentTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPipeSegmentTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPipeSegmentTypeEnum | undefined
{
    return parser.extract< IfcPipeSegmentTypeEnum >( IfcPipeSegmentTypeEnumSearch, input, cursor, endCursor );
}
