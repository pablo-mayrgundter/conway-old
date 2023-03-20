enum IfcChangeActionEnum {
    NOCHANGE = 0,
    MODIFIED = 1,
    ADDED = 2,
    DELETED = 3,
    MODIFIEDADDED = 4,
    MODIFIEDDELETED = 5,
}
export { IfcChangeActionEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcChangeActionEnum = new Int32Array( [43] );

let prefixSumAddressIfcChangeActionEnum = new Uint32Array( [0,9,24,41,48,58,68] );

let slotMapIfcChangeActionEnum = new Int32Array( [3,4,5,2,0,1] );

let encodedDataIfcChangeActionEnum = (new TextEncoder()).encode( ".DELETED..MODIFIEDADDED..MODIFIEDDELETED..ADDED..NOCHANGE..MODIFIED." );

let IfcChangeActionEnumSearch = new MinimalPerfectHash< IfcChangeActionEnum >( gMapIfcChangeActionEnum, prefixSumAddressIfcChangeActionEnum, slotMapIfcChangeActionEnum, encodedDataIfcChangeActionEnum );

export { IfcChangeActionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcChangeActionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcChangeActionEnum | undefined
{
    return parser.extract< IfcChangeActionEnum >( IfcChangeActionEnumSearch, input, cursor, endCursor );
}
