enum IfcSpaceTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
export default IfcSpaceTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSpaceTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcSpaceTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcSpaceTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcSpaceTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcSpaceTypeEnumSearch = new MinimalPerfectHash< IfcSpaceTypeEnum >( gMapIfcSpaceTypeEnum, prefixSumAddressIfcSpaceTypeEnum, slotMapIfcSpaceTypeEnum, encodedDataIfcSpaceTypeEnum );

export { IfcSpaceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSpaceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSpaceTypeEnum | undefined
{
    return parser.parse< IfcSpaceTypeEnum >( IfcSpaceTypeEnumSearch, input, cursor, endCursor );
}

