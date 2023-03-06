enum IfcChillerTypeEnum {
    AIRCOOLED = 0,
    WATERCOOLED = 1,
    HEATRECOVERY = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export default IfcChillerTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcChillerTypeEnum = new Int32Array( [4] );

let prefixSumAddressIfcChillerTypeEnum = new Uint32Array( [0,13,25,36,49,63] );

let slotMapIfcChillerTypeEnum = new Int32Array( [3,4,0,1,2] );

let encodedDataIfcChillerTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED..AIRCOOLED..WATERCOOLED..HEATRECOVERY." );

let IfcChillerTypeEnumSearch = new MinimalPerfectHash< IfcChillerTypeEnum >( gMapIfcChillerTypeEnum, prefixSumAddressIfcChillerTypeEnum, slotMapIfcChillerTypeEnum, encodedDataIfcChillerTypeEnum );

export { IfcChillerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcChillerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcChillerTypeEnum | undefined
{
    return parser.extract< IfcChillerTypeEnum >( IfcChillerTypeEnumSearch, input, cursor, endCursor );
}

