enum IfcSIPrefix {
    EXA = 0,
    PETA = 1,
    TERA = 2,
    GIGA = 3,
    MEGA = 4,
    KILO = 5,
    HECTO = 6,
    DECA = 7,
    DECI = 8,
    CENTI = 9,
    MILLI = 10,
    MICRO = 11,
    NANO = 12,
    PICO = 13,
    FEMTO = 14,
    ATTO = 15,
}
export default IfcSIPrefix;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSIPrefix = new Int32Array( [8,35,69,25] );

let prefixSumAddressIfcSIPrefix = new Uint32Array( [0,6,12,18,24,29,36,42,48,55,62,69,75,82,88,94,100] );

let slotMapIfcSIPrefix = new Int32Array( [1,5,12,13,0,10,15,7,9,11,14,4,6,3,8,2] );

let encodedDataIfcSIPrefix = (new TextEncoder()).encode( ".PETA..KILO..NANO..PICO..EXA..MILLI..ATTO..DECA..CENTI..MICRO..FEMTO..MEGA..HECTO..GIGA..DECI..TERA." );

let IfcSIPrefixSearch = new MinimalPerfectHash< IfcSIPrefix >( gMapIfcSIPrefix, prefixSumAddressIfcSIPrefix, slotMapIfcSIPrefix, encodedDataIfcSIPrefix );

export { IfcSIPrefixSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSIPrefixDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSIPrefix | undefined
{
    return parser.parse< IfcSIPrefix >( IfcSIPrefixSearch, input, cursor, endCursor );
}

