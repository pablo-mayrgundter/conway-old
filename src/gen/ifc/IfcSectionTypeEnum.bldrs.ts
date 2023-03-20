enum IfcSectionTypeEnum {
    UNIFORM = 0,
    TAPERED = 1,
}
export { IfcSectionTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSectionTypeEnum = new Int32Array( [3] );

let prefixSumAddressIfcSectionTypeEnum = new Uint32Array( [0,9,18] );

let slotMapIfcSectionTypeEnum = new Int32Array( [1,0] );

let encodedDataIfcSectionTypeEnum = (new TextEncoder()).encode( ".TAPERED..UNIFORM." );

let IfcSectionTypeEnumSearch = new MinimalPerfectHash< IfcSectionTypeEnum >( gMapIfcSectionTypeEnum, prefixSumAddressIfcSectionTypeEnum, slotMapIfcSectionTypeEnum, encodedDataIfcSectionTypeEnum );

export { IfcSectionTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSectionTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSectionTypeEnum | undefined
{
    return parser.extract< IfcSectionTypeEnum >( IfcSectionTypeEnumSearch, input, cursor, endCursor );
}
