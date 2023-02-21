enum IfcElectricGeneratorTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
export default IfcElectricGeneratorTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcElectricGeneratorTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcElectricGeneratorTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcElectricGeneratorTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcElectricGeneratorTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcElectricGeneratorTypeEnumSearch = new MinimalPerfectHash< IfcElectricGeneratorTypeEnum >( gMapIfcElectricGeneratorTypeEnum, prefixSumAddressIfcElectricGeneratorTypeEnum, slotMapIfcElectricGeneratorTypeEnum, encodedDataIfcElectricGeneratorTypeEnum );

export { IfcElectricGeneratorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcElectricGeneratorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcElectricGeneratorTypeEnum | undefined
{
    return parser.parse< IfcElectricGeneratorTypeEnum >( IfcElectricGeneratorTypeEnumSearch, input, cursor, endCursor );
}

