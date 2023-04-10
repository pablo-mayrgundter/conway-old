enum IfcBurnerTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
const IfcBurnerTypeEnumCount = 2;

export { IfcBurnerTypeEnum, IfcBurnerTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBurnerTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcBurnerTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcBurnerTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcBurnerTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcBurnerTypeEnumSearch = new MinimalPerfectHash< IfcBurnerTypeEnum >( gMapIfcBurnerTypeEnum, prefixSumAddressIfcBurnerTypeEnum, slotMapIfcBurnerTypeEnum, encodedDataIfcBurnerTypeEnum );

export { IfcBurnerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBurnerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBurnerTypeEnum | undefined
{
    return parser.extract< IfcBurnerTypeEnum >( IfcBurnerTypeEnumSearch, input, cursor, endCursor );
}
