enum IfcChangeActionEnum {
    NOCHANGE = 0,
    MODIFIED = 1,
    ADDED = 2,
    DELETED = 3,
    NOTDEFINED = 4,
}
const IfcChangeActionEnumCount = 5;

export { IfcChangeActionEnum, IfcChangeActionEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcChangeActionEnum = new Int32Array( [29] );

let prefixSumAddressIfcChangeActionEnum = new Uint32Array( [0,10,22,32,39,48] );

let slotMapIfcChangeActionEnum = new Int32Array( [0,4,1,2,3] );

let encodedDataIfcChangeActionEnum = (new TextEncoder()).encode( ".NOCHANGE..NOTDEFINED..MODIFIED..ADDED..DELETED." );

let IfcChangeActionEnumSearch = new MinimalPerfectHash< IfcChangeActionEnum >( gMapIfcChangeActionEnum, prefixSumAddressIfcChangeActionEnum, slotMapIfcChangeActionEnum, encodedDataIfcChangeActionEnum );

export { IfcChangeActionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcChangeActionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcChangeActionEnum | undefined
{
    return parser.extract< IfcChangeActionEnum >( IfcChangeActionEnumSearch, input, cursor, endCursor );
}
