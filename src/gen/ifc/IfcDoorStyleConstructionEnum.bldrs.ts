enum IfcDoorStyleConstructionEnum {
    ALUMINIUM = 0,
    HIGH_GRADE_STEEL = 1,
    STEEL = 2,
    WOOD = 3,
    ALUMINIUM_WOOD = 4,
    ALUMINIUM_PLASTIC = 5,
    PLASTIC = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export { IfcDoorStyleConstructionEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDoorStyleConstructionEnum = new Int32Array( [6,-2,46] );

let prefixSumAddressIfcDoorStyleConstructionEnum = new Uint32Array( [0,11,29,38,51,57,64,76,92,111] );

let slotMapIfcDoorStyleConstructionEnum = new Int32Array( [0,1,6,7,3,2,8,4,5] );

let encodedDataIfcDoorStyleConstructionEnum = (new TextEncoder()).encode( ".ALUMINIUM..HIGH_GRADE_STEEL..PLASTIC..USERDEFINED..WOOD..STEEL..NOTDEFINED..ALUMINIUM_WOOD..ALUMINIUM_PLASTIC." );

let IfcDoorStyleConstructionEnumSearch = new MinimalPerfectHash< IfcDoorStyleConstructionEnum >( gMapIfcDoorStyleConstructionEnum, prefixSumAddressIfcDoorStyleConstructionEnum, slotMapIfcDoorStyleConstructionEnum, encodedDataIfcDoorStyleConstructionEnum );

export { IfcDoorStyleConstructionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDoorStyleConstructionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDoorStyleConstructionEnum | undefined
{
    return parser.extract< IfcDoorStyleConstructionEnum >( IfcDoorStyleConstructionEnumSearch, input, cursor, endCursor );
}

