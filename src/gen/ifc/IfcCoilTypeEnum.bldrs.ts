enum IfcCoilTypeEnum {
    DXCOOLINGCOIL = 0,
    WATERCOOLINGCOIL = 1,
    STEAMHEATINGCOIL = 2,
    WATERHEATINGCOIL = 3,
    ELECTRICHEATINGCOIL = 4,
    GASHEATINGCOIL = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export default IfcCoilTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCoilTypeEnum = new Int32Array( [24,-4,2] );

let prefixSumAddressIfcCoilTypeEnum = new Uint32Array( [0,12,25,43,61,76,94,115,131] );

let slotMapIfcCoilTypeEnum = new Int32Array( [7,6,3,2,0,1,4,5] );

let encodedDataIfcCoilTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..USERDEFINED..WATERHEATINGCOIL..STEAMHEATINGCOIL..DXCOOLINGCOIL..WATERCOOLINGCOIL..ELECTRICHEATINGCOIL..GASHEATINGCOIL." );

let IfcCoilTypeEnumSearch = new MinimalPerfectHash< IfcCoilTypeEnum >( gMapIfcCoilTypeEnum, prefixSumAddressIfcCoilTypeEnum, slotMapIfcCoilTypeEnum, encodedDataIfcCoilTypeEnum );

export { IfcCoilTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCoilTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCoilTypeEnum | undefined
{
    return parser.extract< IfcCoilTypeEnum >( IfcCoilTypeEnumSearch, input, cursor, endCursor );
}

