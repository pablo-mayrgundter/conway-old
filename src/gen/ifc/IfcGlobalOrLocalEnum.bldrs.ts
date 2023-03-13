enum IfcGlobalOrLocalEnum {
    GLOBAL_COORDS = 0,
    LOCAL_COORDS = 1,
}
export { IfcGlobalOrLocalEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcGlobalOrLocalEnum = new Int32Array( [2] );

let prefixSumAddressIfcGlobalOrLocalEnum = new Uint32Array( [0,14,29] );

let slotMapIfcGlobalOrLocalEnum = new Int32Array( [1,0] );

let encodedDataIfcGlobalOrLocalEnum = (new TextEncoder()).encode( ".LOCAL_COORDS..GLOBAL_COORDS." );

let IfcGlobalOrLocalEnumSearch = new MinimalPerfectHash< IfcGlobalOrLocalEnum >( gMapIfcGlobalOrLocalEnum, prefixSumAddressIfcGlobalOrLocalEnum, slotMapIfcGlobalOrLocalEnum, encodedDataIfcGlobalOrLocalEnum );

export { IfcGlobalOrLocalEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcGlobalOrLocalEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcGlobalOrLocalEnum | undefined
{
    return parser.extract< IfcGlobalOrLocalEnum >( IfcGlobalOrLocalEnumSearch, input, cursor, endCursor );
}

