enum IfcPileConstructionEnum {
    CAST_IN_PLACE = 0,
    COMPOSITE = 1,
    PRECAST_CONCRETE = 2,
    PREFAB_STEEL = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export { IfcPileConstructionEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPileConstructionEnum = new Int32Array( [27] );

let prefixSumAddressIfcPileConstructionEnum = new Uint32Array( [0,11,23,41,55,68,83] );

let slotMapIfcPileConstructionEnum = new Int32Array( [1,5,2,3,4,0] );

let encodedDataIfcPileConstructionEnum = (new TextEncoder()).encode( ".COMPOSITE..NOTDEFINED..PRECAST_CONCRETE..PREFAB_STEEL..USERDEFINED..CAST_IN_PLACE." );

let IfcPileConstructionEnumSearch = new MinimalPerfectHash< IfcPileConstructionEnum >( gMapIfcPileConstructionEnum, prefixSumAddressIfcPileConstructionEnum, slotMapIfcPileConstructionEnum, encodedDataIfcPileConstructionEnum );

export { IfcPileConstructionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPileConstructionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPileConstructionEnum | undefined
{
    return parser.extract< IfcPileConstructionEnum >( IfcPileConstructionEnumSearch, input, cursor, endCursor );
}
