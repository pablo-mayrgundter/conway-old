enum IfcTransformerTypeEnum {
    CURRENT = 0,
    FREQUENCY = 1,
    VOLTAGE = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcTransformerTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTransformerTypeEnum = new Int32Array( [14] );

let prefixSumAddressIfcTransformerTypeEnum = new Uint32Array( [0,9,20,32,41,54] );

let slotMapIfcTransformerTypeEnum = new Int32Array( [2,1,4,0,3] );

let encodedDataIfcTransformerTypeEnum = (new TextEncoder()).encode( ".VOLTAGE..FREQUENCY..NOTDEFINED..CURRENT..USERDEFINED." );

let IfcTransformerTypeEnumSearch = new MinimalPerfectHash< IfcTransformerTypeEnum >( gMapIfcTransformerTypeEnum, prefixSumAddressIfcTransformerTypeEnum, slotMapIfcTransformerTypeEnum, encodedDataIfcTransformerTypeEnum );

export { IfcTransformerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTransformerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTransformerTypeEnum | undefined
{
    return parser.extract< IfcTransformerTypeEnum >( IfcTransformerTypeEnumSearch, input, cursor, endCursor );
}
