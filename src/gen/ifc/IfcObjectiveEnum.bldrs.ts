enum IfcObjectiveEnum {
    CODECOMPLIANCE = 0,
    DESIGNINTENT = 1,
    HEALTHANDSAFETY = 2,
    REQUIREMENT = 3,
    SPECIFICATION = 4,
    TRIGGERCONDITION = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcObjectiveEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcObjectiveEnum = new Int32Array( [26,2,8] );

let prefixSumAddressIfcObjectiveEnum = new Uint32Array( [0,13,29,44,56,74,88,105,118] );

let slotMapIfcObjectiveEnum = new Int32Array( [3,0,4,7,5,1,2,6] );

let encodedDataIfcObjectiveEnum = (new TextEncoder()).encode( ".REQUIREMENT..CODECOMPLIANCE..SPECIFICATION..NOTDEFINED..TRIGGERCONDITION..DESIGNINTENT..HEALTHANDSAFETY..USERDEFINED." );

let IfcObjectiveEnumSearch = new MinimalPerfectHash< IfcObjectiveEnum >( gMapIfcObjectiveEnum, prefixSumAddressIfcObjectiveEnum, slotMapIfcObjectiveEnum, encodedDataIfcObjectiveEnum );

export { IfcObjectiveEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcObjectiveEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcObjectiveEnum | undefined
{
    return parser.extract< IfcObjectiveEnum >( IfcObjectiveEnumSearch, input, cursor, endCursor );
}
