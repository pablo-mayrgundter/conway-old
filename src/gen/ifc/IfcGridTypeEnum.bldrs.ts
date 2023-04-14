enum IfcGridTypeEnum {
    RECTANGULAR = 0,
    RADIAL = 1,
    TRIANGULAR = 2,
    IRREGULAR = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
const IfcGridTypeEnumCount = 6;

export { IfcGridTypeEnum, IfcGridTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcGridTypeEnum = new Int32Array( [210] );

let prefixSumAddressIfcGridTypeEnum = new Uint32Array( [0,12,25,36,49,57,69] );

let slotMapIfcGridTypeEnum = new Int32Array( [5,0,3,4,1,2] );

let encodedDataIfcGridTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..RECTANGULAR..IRREGULAR..USERDEFINED..RADIAL..TRIANGULAR." );

let IfcGridTypeEnumSearch = new MinimalPerfectHash< IfcGridTypeEnum >( gMapIfcGridTypeEnum, prefixSumAddressIfcGridTypeEnum, slotMapIfcGridTypeEnum, encodedDataIfcGridTypeEnum );

export { IfcGridTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcGridTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcGridTypeEnum | undefined
{
    return parser.extract< IfcGridTypeEnum >( IfcGridTypeEnumSearch, input, cursor, endCursor );
}
