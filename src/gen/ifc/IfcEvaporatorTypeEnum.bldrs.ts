enum IfcEvaporatorTypeEnum {
    DIRECTEXPANSION = 0,
    DIRECTEXPANSIONSHELLANDTUBE = 1,
    DIRECTEXPANSIONTUBEINTUBE = 2,
    DIRECTEXPANSIONBRAZEDPLATE = 3,
    FLOODEDSHELLANDTUBE = 4,
    SHELLANDCOIL = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcEvaporatorTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEvaporatorTypeEnum = new Int32Array( [7,0,84] );

let prefixSumAddressIfcEvaporatorTypeEnum = new Uint32Array( [0,12,41,62,89,106,120,148,161] );

let slotMapIfcEvaporatorTypeEnum = new Int32Array( [7,1,4,2,0,5,3,6] );

let encodedDataIfcEvaporatorTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..DIRECTEXPANSIONSHELLANDTUBE..FLOODEDSHELLANDTUBE..DIRECTEXPANSIONTUBEINTUBE..DIRECTEXPANSION..SHELLANDCOIL..DIRECTEXPANSIONBRAZEDPLATE..USERDEFINED." );

let IfcEvaporatorTypeEnumSearch = new MinimalPerfectHash< IfcEvaporatorTypeEnum >( gMapIfcEvaporatorTypeEnum, prefixSumAddressIfcEvaporatorTypeEnum, slotMapIfcEvaporatorTypeEnum, encodedDataIfcEvaporatorTypeEnum );

export { IfcEvaporatorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEvaporatorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEvaporatorTypeEnum | undefined
{
    return parser.extract< IfcEvaporatorTypeEnum >( IfcEvaporatorTypeEnumSearch, input, cursor, endCursor );
}
