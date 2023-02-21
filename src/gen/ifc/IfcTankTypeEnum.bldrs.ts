enum IfcTankTypeEnum {
    PREFORMED = 0,
    SECTIONAL = 1,
    EXPANSION = 2,
    PRESSUREVESSEL = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export default IfcTankTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTankTypeEnum = new Int32Array( [7] );

let prefixSumAddressIfcTankTypeEnum = new Uint32Array( [0,11,24,35,46,58,74] );

let slotMapIfcTankTypeEnum = new Int32Array( [1,4,0,2,5,3] );

let encodedDataIfcTankTypeEnum = (new TextEncoder()).encode( ".SECTIONAL..USERDEFINED..PREFORMED..EXPANSION..NOTDEFINED..PRESSUREVESSEL." );

let IfcTankTypeEnumSearch = new MinimalPerfectHash< IfcTankTypeEnum >( gMapIfcTankTypeEnum, prefixSumAddressIfcTankTypeEnum, slotMapIfcTankTypeEnum, encodedDataIfcTankTypeEnum );

export { IfcTankTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTankTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTankTypeEnum | undefined
{
    return parser.parse< IfcTankTypeEnum >( IfcTankTypeEnumSearch, input, cursor, endCursor );
}

