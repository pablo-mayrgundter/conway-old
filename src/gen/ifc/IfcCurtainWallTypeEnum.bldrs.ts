enum IfcCurtainWallTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
export default IfcCurtainWallTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCurtainWallTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcCurtainWallTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcCurtainWallTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcCurtainWallTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcCurtainWallTypeEnumSearch = new MinimalPerfectHash< IfcCurtainWallTypeEnum >( gMapIfcCurtainWallTypeEnum, prefixSumAddressIfcCurtainWallTypeEnum, slotMapIfcCurtainWallTypeEnum, encodedDataIfcCurtainWallTypeEnum );

export { IfcCurtainWallTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCurtainWallTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCurtainWallTypeEnum | undefined
{
    return parser.extract< IfcCurtainWallTypeEnum >( IfcCurtainWallTypeEnumSearch, input, cursor, endCursor );
}

