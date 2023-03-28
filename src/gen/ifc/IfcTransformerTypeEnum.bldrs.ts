enum IfcTransformerTypeEnum {
    CURRENT = 0,
    FREQUENCY = 1,
    INVERTER = 2,
    RECTIFIER = 3,
    VOLTAGE = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcTransformerTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTransformerTypeEnum = new Int32Array( [495] );

let prefixSumAddressIfcTransformerTypeEnum = new Uint32Array( [0,9,18,29,42,53,65,75] );

let slotMapIfcTransformerTypeEnum = new Int32Array( [0,4,3,5,1,6,2] );

let encodedDataIfcTransformerTypeEnum = (new TextEncoder()).encode( ".CURRENT..VOLTAGE..RECTIFIER..USERDEFINED..FREQUENCY..NOTDEFINED..INVERTER." );

let IfcTransformerTypeEnumSearch = new MinimalPerfectHash< IfcTransformerTypeEnum >( gMapIfcTransformerTypeEnum, prefixSumAddressIfcTransformerTypeEnum, slotMapIfcTransformerTypeEnum, encodedDataIfcTransformerTypeEnum );

export { IfcTransformerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTransformerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTransformerTypeEnum | undefined
{
    return parser.extract< IfcTransformerTypeEnum >( IfcTransformerTypeEnumSearch, input, cursor, endCursor );
}
