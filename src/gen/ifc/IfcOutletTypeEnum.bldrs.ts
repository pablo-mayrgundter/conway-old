enum IfcOutletTypeEnum {
    AUDIOVISUALOUTLET = 0,
    COMMUNICATIONSOUTLET = 1,
    POWEROUTLET = 2,
    DATAOUTLET = 3,
    TELEPHONEOUTLET = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcOutletTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcOutletTypeEnum = new Int32Array( [147] );

let prefixSumAddressIfcOutletTypeEnum = new Uint32Array( [0,22,35,52,65,84,96,108] );

let slotMapIfcOutletTypeEnum = new Int32Array( [1,2,4,5,0,3,6] );

let encodedDataIfcOutletTypeEnum = (new TextEncoder()).encode( ".COMMUNICATIONSOUTLET..POWEROUTLET..TELEPHONEOUTLET..USERDEFINED..AUDIOVISUALOUTLET..DATAOUTLET..NOTDEFINED." );

let IfcOutletTypeEnumSearch = new MinimalPerfectHash< IfcOutletTypeEnum >( gMapIfcOutletTypeEnum, prefixSumAddressIfcOutletTypeEnum, slotMapIfcOutletTypeEnum, encodedDataIfcOutletTypeEnum );

export { IfcOutletTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcOutletTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcOutletTypeEnum | undefined
{
    return parser.extract< IfcOutletTypeEnum >( IfcOutletTypeEnumSearch, input, cursor, endCursor );
}
