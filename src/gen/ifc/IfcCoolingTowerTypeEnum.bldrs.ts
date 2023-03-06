enum IfcCoolingTowerTypeEnum {
    NATURALDRAFT = 0,
    MECHANICALINDUCEDDRAFT = 1,
    MECHANICALFORCEDDRAFT = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export default IfcCoolingTowerTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCoolingTowerTypeEnum = new Int32Array( [20] );

let prefixSumAddressIfcCoolingTowerTypeEnum = new Uint32Array( [0,24,47,59,72,86] );

let slotMapIfcCoolingTowerTypeEnum = new Int32Array( [1,2,4,3,0] );

let encodedDataIfcCoolingTowerTypeEnum = (new TextEncoder()).encode( ".MECHANICALINDUCEDDRAFT..MECHANICALFORCEDDRAFT..NOTDEFINED..USERDEFINED..NATURALDRAFT." );

let IfcCoolingTowerTypeEnumSearch = new MinimalPerfectHash< IfcCoolingTowerTypeEnum >( gMapIfcCoolingTowerTypeEnum, prefixSumAddressIfcCoolingTowerTypeEnum, slotMapIfcCoolingTowerTypeEnum, encodedDataIfcCoolingTowerTypeEnum );

export { IfcCoolingTowerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCoolingTowerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCoolingTowerTypeEnum | undefined
{
    return parser.extract< IfcCoolingTowerTypeEnum >( IfcCoolingTowerTypeEnumSearch, input, cursor, endCursor );
}

