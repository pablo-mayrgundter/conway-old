enum IfcDuctFittingTypeEnum {
    BEND = 0,
    CONNECTOR = 1,
    ENTRY = 2,
    EXIT = 3,
    JUNCTION = 4,
    OBSTRUCTION = 5,
    TRANSITION = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export { IfcDuctFittingTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDuctFittingTypeEnum = new Int32Array( [1,15,-1] );

let prefixSumAddressIfcDuctFittingTypeEnum = new Uint32Array( [0,11,23,36,48,54,64,77,83,90] );

let slotMapIfcDuctFittingTypeEnum = new Int32Array( [1,8,5,6,0,4,7,3,2] );

let encodedDataIfcDuctFittingTypeEnum = (new TextEncoder()).encode( ".CONNECTOR..NOTDEFINED..OBSTRUCTION..TRANSITION..BEND..JUNCTION..USERDEFINED..EXIT..ENTRY." );

let IfcDuctFittingTypeEnumSearch = new MinimalPerfectHash< IfcDuctFittingTypeEnum >( gMapIfcDuctFittingTypeEnum, prefixSumAddressIfcDuctFittingTypeEnum, slotMapIfcDuctFittingTypeEnum, encodedDataIfcDuctFittingTypeEnum );

export { IfcDuctFittingTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDuctFittingTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDuctFittingTypeEnum | undefined
{
    return parser.extract< IfcDuctFittingTypeEnum >( IfcDuctFittingTypeEnumSearch, input, cursor, endCursor );
}

