enum IfcEngineTypeEnum {
    EXTERNALCOMBUSTION = 0,
    INTERNALCOMBUSTION = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
const IfcEngineTypeEnumCount = 4;

export { IfcEngineTypeEnum, IfcEngineTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEngineTypeEnum = new Int32Array( [26] );

let prefixSumAddressIfcEngineTypeEnum = new Uint32Array( [0,20,32,52,65] );

let slotMapIfcEngineTypeEnum = new Int32Array( [0,3,1,2] );

let encodedDataIfcEngineTypeEnum = (new TextEncoder()).encode( ".EXTERNALCOMBUSTION..NOTDEFINED..INTERNALCOMBUSTION..USERDEFINED." );

let IfcEngineTypeEnumSearch = new MinimalPerfectHash< IfcEngineTypeEnum >( gMapIfcEngineTypeEnum, prefixSumAddressIfcEngineTypeEnum, slotMapIfcEngineTypeEnum, encodedDataIfcEngineTypeEnum );

export { IfcEngineTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEngineTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEngineTypeEnum | undefined
{
    return parser.extract< IfcEngineTypeEnum >( IfcEngineTypeEnumSearch, input, cursor, endCursor );
}
