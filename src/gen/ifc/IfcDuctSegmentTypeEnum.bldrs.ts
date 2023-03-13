enum IfcDuctSegmentTypeEnum {
    RIGIDSEGMENT = 0,
    FLEXIBLESEGMENT = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export { IfcDuctSegmentTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDuctSegmentTypeEnum = new Int32Array( [7] );

let prefixSumAddressIfcDuctSegmentTypeEnum = new Uint32Array( [0,12,26,43,56] );

let slotMapIfcDuctSegmentTypeEnum = new Int32Array( [3,0,1,2] );

let encodedDataIfcDuctSegmentTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..RIGIDSEGMENT..FLEXIBLESEGMENT..USERDEFINED." );

let IfcDuctSegmentTypeEnumSearch = new MinimalPerfectHash< IfcDuctSegmentTypeEnum >( gMapIfcDuctSegmentTypeEnum, prefixSumAddressIfcDuctSegmentTypeEnum, slotMapIfcDuctSegmentTypeEnum, encodedDataIfcDuctSegmentTypeEnum );

export { IfcDuctSegmentTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDuctSegmentTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDuctSegmentTypeEnum | undefined
{
    return parser.extract< IfcDuctSegmentTypeEnum >( IfcDuctSegmentTypeEnumSearch, input, cursor, endCursor );
}

