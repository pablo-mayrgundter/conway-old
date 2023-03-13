enum IfcOutletTypeEnum {
    AUDIOVISUALOUTLET = 0,
    COMMUNICATIONSOUTLET = 1,
    POWEROUTLET = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcOutletTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcOutletTypeEnum = new Int32Array( [7] );

let prefixSumAddressIfcOutletTypeEnum = new Uint32Array( [0,12,25,38,57,79] );

let slotMapIfcOutletTypeEnum = new Int32Array( [4,3,2,0,1] );

let encodedDataIfcOutletTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..USERDEFINED..POWEROUTLET..AUDIOVISUALOUTLET..COMMUNICATIONSOUTLET." );

let IfcOutletTypeEnumSearch = new MinimalPerfectHash< IfcOutletTypeEnum >( gMapIfcOutletTypeEnum, prefixSumAddressIfcOutletTypeEnum, slotMapIfcOutletTypeEnum, encodedDataIfcOutletTypeEnum );

export { IfcOutletTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcOutletTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcOutletTypeEnum | undefined
{
    return parser.extract< IfcOutletTypeEnum >( IfcOutletTypeEnumSearch, input, cursor, endCursor );
}

