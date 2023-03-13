enum IfcEvaporatorTypeEnum {
    DIRECTEXPANSIONSHELLANDTUBE = 0,
    DIRECTEXPANSIONTUBEINTUBE = 1,
    DIRECTEXPANSIONBRAZEDPLATE = 2,
    FLOODEDSHELLANDTUBE = 3,
    SHELLANDCOIL = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcEvaporatorTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEvaporatorTypeEnum = new Int32Array( [410] );

let prefixSumAddressIfcEvaporatorTypeEnum = new Uint32Array( [0,28,41,70,97,118,130,144] );

let slotMapIfcEvaporatorTypeEnum = new Int32Array( [2,5,0,1,3,6,4] );

let encodedDataIfcEvaporatorTypeEnum = (new TextEncoder()).encode( ".DIRECTEXPANSIONBRAZEDPLATE..USERDEFINED..DIRECTEXPANSIONSHELLANDTUBE..DIRECTEXPANSIONTUBEINTUBE..FLOODEDSHELLANDTUBE..NOTDEFINED..SHELLANDCOIL." );

let IfcEvaporatorTypeEnumSearch = new MinimalPerfectHash< IfcEvaporatorTypeEnum >( gMapIfcEvaporatorTypeEnum, prefixSumAddressIfcEvaporatorTypeEnum, slotMapIfcEvaporatorTypeEnum, encodedDataIfcEvaporatorTypeEnum );

export { IfcEvaporatorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEvaporatorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEvaporatorTypeEnum | undefined
{
    return parser.extract< IfcEvaporatorTypeEnum >( IfcEvaporatorTypeEnumSearch, input, cursor, endCursor );
}

