enum IfcElectricHeaterTypeEnum {
    ELECTRICPOINTHEATER = 0,
    ELECTRICCABLEHEATER = 1,
    ELECTRICMATHEATER = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export default IfcElectricHeaterTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcElectricHeaterTypeEnum = new Int32Array( [37] );

let prefixSumAddressIfcElectricHeaterTypeEnum = new Uint32Array( [0,21,34,46,67,86] );

let slotMapIfcElectricHeaterTypeEnum = new Int32Array( [1,3,4,0,2] );

let encodedDataIfcElectricHeaterTypeEnum = (new TextEncoder()).encode( ".ELECTRICCABLEHEATER..USERDEFINED..NOTDEFINED..ELECTRICPOINTHEATER..ELECTRICMATHEATER." );

let IfcElectricHeaterTypeEnumSearch = new MinimalPerfectHash< IfcElectricHeaterTypeEnum >( gMapIfcElectricHeaterTypeEnum, prefixSumAddressIfcElectricHeaterTypeEnum, slotMapIfcElectricHeaterTypeEnum, encodedDataIfcElectricHeaterTypeEnum );

export { IfcElectricHeaterTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcElectricHeaterTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcElectricHeaterTypeEnum | undefined
{
    return parser.extract< IfcElectricHeaterTypeEnum >( IfcElectricHeaterTypeEnumSearch, input, cursor, endCursor );
}

