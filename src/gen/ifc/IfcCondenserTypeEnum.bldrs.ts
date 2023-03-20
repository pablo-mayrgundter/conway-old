enum IfcCondenserTypeEnum {
    WATERCOOLEDSHELLTUBE = 0,
    WATERCOOLEDSHELLCOIL = 1,
    WATERCOOLEDTUBEINTUBE = 2,
    WATERCOOLEDBRAZEDPLATE = 3,
    AIRCOOLED = 4,
    EVAPORATIVECOOLED = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcCondenserTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCondenserTypeEnum = new Int32Array( [2,-4,56] );

let prefixSumAddressIfcCondenserTypeEnum = new Uint32Array( [0,22,34,56,80,91,110,133,146] );

let slotMapIfcCondenserTypeEnum = new Int32Array( [0,7,1,3,4,5,2,6] );

let encodedDataIfcCondenserTypeEnum = (new TextEncoder()).encode( ".WATERCOOLEDSHELLTUBE..NOTDEFINED..WATERCOOLEDSHELLCOIL..WATERCOOLEDBRAZEDPLATE..AIRCOOLED..EVAPORATIVECOOLED..WATERCOOLEDTUBEINTUBE..USERDEFINED." );

let IfcCondenserTypeEnumSearch = new MinimalPerfectHash< IfcCondenserTypeEnum >( gMapIfcCondenserTypeEnum, prefixSumAddressIfcCondenserTypeEnum, slotMapIfcCondenserTypeEnum, encodedDataIfcCondenserTypeEnum );

export { IfcCondenserTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCondenserTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCondenserTypeEnum | undefined
{
    return parser.extract< IfcCondenserTypeEnum >( IfcCondenserTypeEnumSearch, input, cursor, endCursor );
}
