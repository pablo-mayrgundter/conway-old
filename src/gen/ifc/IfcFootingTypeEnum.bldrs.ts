enum IfcFootingTypeEnum {
    FOOTING_BEAM = 0,
    PAD_FOOTING = 1,
    PILE_CAP = 2,
    STRIP_FOOTING = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export { IfcFootingTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcFootingTypeEnum = new Int32Array( [90] );

let prefixSumAddressIfcFootingTypeEnum = new Uint32Array( [0,12,27,40,53,67,77] );

let slotMapIfcFootingTypeEnum = new Int32Array( [5,3,4,1,0,2] );

let encodedDataIfcFootingTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..STRIP_FOOTING..USERDEFINED..PAD_FOOTING..FOOTING_BEAM..PILE_CAP." );

let IfcFootingTypeEnumSearch = new MinimalPerfectHash< IfcFootingTypeEnum >( gMapIfcFootingTypeEnum, prefixSumAddressIfcFootingTypeEnum, slotMapIfcFootingTypeEnum, encodedDataIfcFootingTypeEnum );

export { IfcFootingTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcFootingTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcFootingTypeEnum | undefined
{
    return parser.extract< IfcFootingTypeEnum >( IfcFootingTypeEnumSearch, input, cursor, endCursor );
}

