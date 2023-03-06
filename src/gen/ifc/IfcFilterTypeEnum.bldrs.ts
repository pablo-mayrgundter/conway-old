enum IfcFilterTypeEnum {
    AIRPARTICLEFILTER = 0,
    ODORFILTER = 1,
    OILFILTER = 2,
    STRAINER = 3,
    WATERFILTER = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export default IfcFilterTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcFilterTypeEnum = new Int32Array( [260] );

let prefixSumAddressIfcFilterTypeEnum = new Uint32Array( [0,11,30,40,52,65,77,90] );

let slotMapIfcFilterTypeEnum = new Int32Array( [2,0,3,1,5,6,4] );

let encodedDataIfcFilterTypeEnum = (new TextEncoder()).encode( ".OILFILTER..AIRPARTICLEFILTER..STRAINER..ODORFILTER..USERDEFINED..NOTDEFINED..WATERFILTER." );

let IfcFilterTypeEnumSearch = new MinimalPerfectHash< IfcFilterTypeEnum >( gMapIfcFilterTypeEnum, prefixSumAddressIfcFilterTypeEnum, slotMapIfcFilterTypeEnum, encodedDataIfcFilterTypeEnum );

export { IfcFilterTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcFilterTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcFilterTypeEnum | undefined
{
    return parser.extract< IfcFilterTypeEnum >( IfcFilterTypeEnumSearch, input, cursor, endCursor );
}

