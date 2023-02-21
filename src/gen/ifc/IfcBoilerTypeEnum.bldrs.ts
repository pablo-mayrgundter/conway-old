enum IfcBoilerTypeEnum {
    WATER = 0,
    STEAM = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export default IfcBoilerTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBoilerTypeEnum = new Int32Array( [7] );

let prefixSumAddressIfcBoilerTypeEnum = new Uint32Array( [0,12,19,26,39] );

let slotMapIfcBoilerTypeEnum = new Int32Array( [3,1,0,2] );

let encodedDataIfcBoilerTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..STEAM..WATER..USERDEFINED." );

let IfcBoilerTypeEnumSearch = new MinimalPerfectHash< IfcBoilerTypeEnum >( gMapIfcBoilerTypeEnum, prefixSumAddressIfcBoilerTypeEnum, slotMapIfcBoilerTypeEnum, encodedDataIfcBoilerTypeEnum );

export { IfcBoilerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBoilerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBoilerTypeEnum | undefined
{
    return parser.parse< IfcBoilerTypeEnum >( IfcBoilerTypeEnumSearch, input, cursor, endCursor );
}

