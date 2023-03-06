enum IfcWallTypeEnum {
    STANDARD = 0,
    POLYGONAL = 1,
    SHEAR = 2,
    ELEMENTEDWALL = 3,
    PLUMBINGWALL = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export default IfcWallTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcWallTypeEnum = new Int32Array( [105] );

let prefixSumAddressIfcWallTypeEnum = new Uint32Array( [0,14,26,37,52,65,72,82] );

let slotMapIfcWallTypeEnum = new Int32Array( [4,6,1,3,5,2,0] );

let encodedDataIfcWallTypeEnum = (new TextEncoder()).encode( ".PLUMBINGWALL..NOTDEFINED..POLYGONAL..ELEMENTEDWALL..USERDEFINED..SHEAR..STANDARD." );

let IfcWallTypeEnumSearch = new MinimalPerfectHash< IfcWallTypeEnum >( gMapIfcWallTypeEnum, prefixSumAddressIfcWallTypeEnum, slotMapIfcWallTypeEnum, encodedDataIfcWallTypeEnum );

export { IfcWallTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcWallTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcWallTypeEnum | undefined
{
    return parser.extract< IfcWallTypeEnum >( IfcWallTypeEnumSearch, input, cursor, endCursor );
}

