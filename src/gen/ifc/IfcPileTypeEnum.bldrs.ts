enum IfcPileTypeEnum {
    COHESION = 0,
    FRICTION = 1,
    SUPPORT = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export default IfcPileTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPileTypeEnum = new Int32Array( [66] );

let prefixSumAddressIfcPileTypeEnum = new Uint32Array( [0,12,22,31,44,54] );

let slotMapIfcPileTypeEnum = new Int32Array( [4,1,2,3,0] );

let encodedDataIfcPileTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..FRICTION..SUPPORT..USERDEFINED..COHESION." );

let IfcPileTypeEnumSearch = new MinimalPerfectHash< IfcPileTypeEnum >( gMapIfcPileTypeEnum, prefixSumAddressIfcPileTypeEnum, slotMapIfcPileTypeEnum, encodedDataIfcPileTypeEnum );

export { IfcPileTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPileTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPileTypeEnum | undefined
{
    return parser.extract< IfcPileTypeEnum >( IfcPileTypeEnumSearch, input, cursor, endCursor );
}

