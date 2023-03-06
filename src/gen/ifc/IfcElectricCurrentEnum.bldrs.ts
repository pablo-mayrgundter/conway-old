enum IfcElectricCurrentEnum {
    ALTERNATING = 0,
    DIRECT = 1,
    NOTDEFINED = 2,
}
export default IfcElectricCurrentEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcElectricCurrentEnum = new Int32Array( [2] );

let prefixSumAddressIfcElectricCurrentEnum = new Uint32Array( [0,8,20,33] );

let slotMapIfcElectricCurrentEnum = new Int32Array( [1,2,0] );

let encodedDataIfcElectricCurrentEnum = (new TextEncoder()).encode( ".DIRECT..NOTDEFINED..ALTERNATING." );

let IfcElectricCurrentEnumSearch = new MinimalPerfectHash< IfcElectricCurrentEnum >( gMapIfcElectricCurrentEnum, prefixSumAddressIfcElectricCurrentEnum, slotMapIfcElectricCurrentEnum, encodedDataIfcElectricCurrentEnum );

export { IfcElectricCurrentEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcElectricCurrentEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcElectricCurrentEnum | undefined
{
    return parser.extract< IfcElectricCurrentEnum >( IfcElectricCurrentEnumSearch, input, cursor, endCursor );
}

