enum IfcSpaceHeaterTypeEnum {
    CONVECTOR = 0,
    RADIATOR = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
const IfcSpaceHeaterTypeEnumCount = 4;

export { IfcSpaceHeaterTypeEnum, IfcSpaceHeaterTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSpaceHeaterTypeEnum = new Int32Array( [17] );

let prefixSumAddressIfcSpaceHeaterTypeEnum = new Uint32Array( [0,10,22,33,46] );

let slotMapIfcSpaceHeaterTypeEnum = new Int32Array( [1,3,0,2] );

let encodedDataIfcSpaceHeaterTypeEnum = (new TextEncoder()).encode( ".RADIATOR..NOTDEFINED..CONVECTOR..USERDEFINED." );

let IfcSpaceHeaterTypeEnumSearch = new MinimalPerfectHash< IfcSpaceHeaterTypeEnum >( gMapIfcSpaceHeaterTypeEnum, prefixSumAddressIfcSpaceHeaterTypeEnum, slotMapIfcSpaceHeaterTypeEnum, encodedDataIfcSpaceHeaterTypeEnum );

export { IfcSpaceHeaterTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSpaceHeaterTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSpaceHeaterTypeEnum | undefined
{
    return parser.extract< IfcSpaceHeaterTypeEnum >( IfcSpaceHeaterTypeEnumSearch, input, cursor, endCursor );
}
