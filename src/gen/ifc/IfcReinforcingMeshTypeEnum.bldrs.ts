enum IfcReinforcingMeshTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
const IfcReinforcingMeshTypeEnumCount = 2;

export { IfcReinforcingMeshTypeEnum, IfcReinforcingMeshTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcReinforcingMeshTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcReinforcingMeshTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcReinforcingMeshTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcReinforcingMeshTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcReinforcingMeshTypeEnumSearch = new MinimalPerfectHash< IfcReinforcingMeshTypeEnum >( gMapIfcReinforcingMeshTypeEnum, prefixSumAddressIfcReinforcingMeshTypeEnum, slotMapIfcReinforcingMeshTypeEnum, encodedDataIfcReinforcingMeshTypeEnum );

export { IfcReinforcingMeshTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcReinforcingMeshTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcReinforcingMeshTypeEnum | undefined
{
    return parser.extract< IfcReinforcingMeshTypeEnum >( IfcReinforcingMeshTypeEnumSearch, input, cursor, endCursor );
}
