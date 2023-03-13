enum IfcProjectedOrTrueLengthEnum {
    PROJECTED_LENGTH = 0,
    TRUE_LENGTH = 1,
}
export { IfcProjectedOrTrueLengthEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcProjectedOrTrueLengthEnum = new Int32Array( [1] );

let prefixSumAddressIfcProjectedOrTrueLengthEnum = new Uint32Array( [0,18,31] );

let slotMapIfcProjectedOrTrueLengthEnum = new Int32Array( [0,1] );

let encodedDataIfcProjectedOrTrueLengthEnum = (new TextEncoder()).encode( ".PROJECTED_LENGTH..TRUE_LENGTH." );

let IfcProjectedOrTrueLengthEnumSearch = new MinimalPerfectHash< IfcProjectedOrTrueLengthEnum >( gMapIfcProjectedOrTrueLengthEnum, prefixSumAddressIfcProjectedOrTrueLengthEnum, slotMapIfcProjectedOrTrueLengthEnum, encodedDataIfcProjectedOrTrueLengthEnum );

export { IfcProjectedOrTrueLengthEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcProjectedOrTrueLengthEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcProjectedOrTrueLengthEnum | undefined
{
    return parser.extract< IfcProjectedOrTrueLengthEnum >( IfcProjectedOrTrueLengthEnumSearch, input, cursor, endCursor );
}

