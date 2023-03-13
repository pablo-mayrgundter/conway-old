enum IfcCoveringTypeEnum {
    CEILING = 0,
    FLOORING = 1,
    CLADDING = 2,
    ROOFING = 3,
    INSULATION = 4,
    MEMBRANE = 5,
    SLEEVING = 6,
    WRAPPING = 7,
    USERDEFINED = 8,
    NOTDEFINED = 9,
}
export { IfcCoveringTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCoveringTypeEnum = new Int32Array( [33,10,1] );

let prefixSumAddressIfcCoveringTypeEnum = new Uint32Array( [0,13,25,35,44,54,64,73,85,95,105] );

let slotMapIfcCoveringTypeEnum = new Int32Array( [8,9,7,3,1,5,0,4,2,6] );

let encodedDataIfcCoveringTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED..WRAPPING..ROOFING..FLOORING..MEMBRANE..CEILING..INSULATION..CLADDING..SLEEVING." );

let IfcCoveringTypeEnumSearch = new MinimalPerfectHash< IfcCoveringTypeEnum >( gMapIfcCoveringTypeEnum, prefixSumAddressIfcCoveringTypeEnum, slotMapIfcCoveringTypeEnum, encodedDataIfcCoveringTypeEnum );

export { IfcCoveringTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCoveringTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCoveringTypeEnum | undefined
{
    return parser.extract< IfcCoveringTypeEnum >( IfcCoveringTypeEnumSearch, input, cursor, endCursor );
}

