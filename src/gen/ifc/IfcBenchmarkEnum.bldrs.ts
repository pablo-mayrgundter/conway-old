enum IfcBenchmarkEnum {
    GREATERTHAN = 0,
    GREATERTHANOREQUALTO = 1,
    LESSTHAN = 2,
    LESSTHANOREQUALTO = 3,
    EQUALTO = 4,
    NOTEQUALTO = 5,
}
export default IfcBenchmarkEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBenchmarkEnum = new Int32Array( [107] );

let prefixSumAddressIfcBenchmarkEnum = new Uint32Array( [0,12,31,41,63,72,85] );

let slotMapIfcBenchmarkEnum = new Int32Array( [5,3,2,1,4,0] );

let encodedDataIfcBenchmarkEnum = (new TextEncoder()).encode( ".NOTEQUALTO..LESSTHANOREQUALTO..LESSTHAN..GREATERTHANOREQUALTO..EQUALTO..GREATERTHAN." );

let IfcBenchmarkEnumSearch = new MinimalPerfectHash< IfcBenchmarkEnum >( gMapIfcBenchmarkEnum, prefixSumAddressIfcBenchmarkEnum, slotMapIfcBenchmarkEnum, encodedDataIfcBenchmarkEnum );

export { IfcBenchmarkEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBenchmarkEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBenchmarkEnum | undefined
{
    return parser.parse< IfcBenchmarkEnum >( IfcBenchmarkEnumSearch, input, cursor, endCursor );
}

