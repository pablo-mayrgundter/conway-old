enum IfcSpaceHeaterTypeEnum {
    SECTIONALRADIATOR = 0,
    PANELRADIATOR = 1,
    TUBULARRADIATOR = 2,
    CONVECTOR = 3,
    BASEBOARDHEATER = 4,
    FINNEDTUBEUNIT = 5,
    UNITHEATER = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export default IfcSpaceHeaterTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSpaceHeaterTypeEnum = new Int32Array( [9,33,11] );

let prefixSumAddressIfcSpaceHeaterTypeEnum = new Uint32Array( [0,11,23,35,54,71,84,101,116,132] );

let slotMapIfcSpaceHeaterTypeEnum = new Int32Array( [3,8,6,0,2,7,4,1,5] );

let encodedDataIfcSpaceHeaterTypeEnum = (new TextEncoder()).encode( ".CONVECTOR..NOTDEFINED..UNITHEATER..SECTIONALRADIATOR..TUBULARRADIATOR..USERDEFINED..BASEBOARDHEATER..PANELRADIATOR..FINNEDTUBEUNIT." );

let IfcSpaceHeaterTypeEnumSearch = new MinimalPerfectHash< IfcSpaceHeaterTypeEnum >( gMapIfcSpaceHeaterTypeEnum, prefixSumAddressIfcSpaceHeaterTypeEnum, slotMapIfcSpaceHeaterTypeEnum, encodedDataIfcSpaceHeaterTypeEnum );

export { IfcSpaceHeaterTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSpaceHeaterTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSpaceHeaterTypeEnum | undefined
{
    return parser.extract< IfcSpaceHeaterTypeEnum >( IfcSpaceHeaterTypeEnumSearch, input, cursor, endCursor );
}

