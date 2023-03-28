enum IfcTankTypeEnum {
    BASIN = 0,
    BREAKPRESSURE = 1,
    EXPANSION = 2,
    FEEDANDEXPANSION = 3,
    PRESSUREVESSEL = 4,
    STORAGE = 5,
    VESSEL = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export { IfcTankTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTankTypeEnum = new Int32Array( [2,-6,12] );

let prefixSumAddressIfcTankTypeEnum = new Uint32Array( [0,18,33,40,51,67,79,87,96,109] );

let slotMapIfcTankTypeEnum = new Int32Array( [3,1,0,2,4,8,6,5,7] );

let encodedDataIfcTankTypeEnum = (new TextEncoder()).encode( ".FEEDANDEXPANSION..BREAKPRESSURE..BASIN..EXPANSION..PRESSUREVESSEL..NOTDEFINED..VESSEL..STORAGE..USERDEFINED." );

let IfcTankTypeEnumSearch = new MinimalPerfectHash< IfcTankTypeEnum >( gMapIfcTankTypeEnum, prefixSumAddressIfcTankTypeEnum, slotMapIfcTankTypeEnum, encodedDataIfcTankTypeEnum );

export { IfcTankTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTankTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTankTypeEnum | undefined
{
    return parser.extract< IfcTankTypeEnum >( IfcTankTypeEnumSearch, input, cursor, endCursor );
}
