enum IfcWorkControlTypeEnum {
    ACTUAL = 0,
    BASELINE = 1,
    PLANNED = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export default IfcWorkControlTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcWorkControlTypeEnum = new Int32Array( [14] );

let prefixSumAddressIfcWorkControlTypeEnum = new Uint32Array( [0,10,19,31,39,52] );

let slotMapIfcWorkControlTypeEnum = new Int32Array( [1,2,4,0,3] );

let encodedDataIfcWorkControlTypeEnum = (new TextEncoder()).encode( ".BASELINE..PLANNED..NOTDEFINED..ACTUAL..USERDEFINED." );

let IfcWorkControlTypeEnumSearch = new MinimalPerfectHash< IfcWorkControlTypeEnum >( gMapIfcWorkControlTypeEnum, prefixSumAddressIfcWorkControlTypeEnum, slotMapIfcWorkControlTypeEnum, encodedDataIfcWorkControlTypeEnum );

export { IfcWorkControlTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcWorkControlTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcWorkControlTypeEnum | undefined
{
    return parser.extract< IfcWorkControlTypeEnum >( IfcWorkControlTypeEnumSearch, input, cursor, endCursor );
}

