enum IfcConstraintEnum {
    HARD = 0,
    SOFT = 1,
    ADVISORY = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcConstraintEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcConstraintEnum = new Int32Array( [17] );

let prefixSumAddressIfcConstraintEnum = new Uint32Array( [0,13,19,29,35,47] );

let slotMapIfcConstraintEnum = new Int32Array( [3,1,2,0,4] );

let encodedDataIfcConstraintEnum = (new TextEncoder()).encode( ".USERDEFINED..SOFT..ADVISORY..HARD..NOTDEFINED." );

let IfcConstraintEnumSearch = new MinimalPerfectHash< IfcConstraintEnum >( gMapIfcConstraintEnum, prefixSumAddressIfcConstraintEnum, slotMapIfcConstraintEnum, encodedDataIfcConstraintEnum );

export { IfcConstraintEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcConstraintEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcConstraintEnum | undefined
{
    return parser.extract< IfcConstraintEnum >( IfcConstraintEnumSearch, input, cursor, endCursor );
}

