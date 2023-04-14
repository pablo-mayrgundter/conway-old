enum IfcBenchmarkEnum {
    GREATERTHAN = 0,
    GREATERTHANOREQUALTO = 1,
    LESSTHAN = 2,
    LESSTHANOREQUALTO = 3,
    EQUALTO = 4,
    NOTEQUALTO = 5,
    INCLUDES = 6,
    NOTINCLUDES = 7,
    INCLUDEDIN = 8,
    NOTINCLUDEDIN = 9,
}
const IfcBenchmarkEnumCount = 10;

export { IfcBenchmarkEnum, IfcBenchmarkEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBenchmarkEnum = new Int32Array( [2,77,31] );

let prefixSumAddressIfcBenchmarkEnum = new Uint32Array( [0,19,29,38,53,65,87,100,113,123,135] );

let slotMapIfcBenchmarkEnum = new Int32Array( [3,2,4,9,8,1,7,0,6,5] );

let encodedDataIfcBenchmarkEnum = (new TextEncoder()).encode( ".LESSTHANOREQUALTO..LESSTHAN..EQUALTO..NOTINCLUDEDIN..INCLUDEDIN..GREATERTHANOREQUALTO..NOTINCLUDES..GREATERTHAN..INCLUDES..NOTEQUALTO." );

let IfcBenchmarkEnumSearch = new MinimalPerfectHash< IfcBenchmarkEnum >( gMapIfcBenchmarkEnum, prefixSumAddressIfcBenchmarkEnum, slotMapIfcBenchmarkEnum, encodedDataIfcBenchmarkEnum );

export { IfcBenchmarkEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBenchmarkEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBenchmarkEnum | undefined
{
    return parser.extract< IfcBenchmarkEnum >( IfcBenchmarkEnumSearch, input, cursor, endCursor );
}
