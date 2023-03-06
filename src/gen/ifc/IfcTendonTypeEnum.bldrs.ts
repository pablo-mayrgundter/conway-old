enum IfcTendonTypeEnum {
    STRAND = 0,
    WIRE = 1,
    BAR = 2,
    COATED = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export default IfcTendonTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTendonTypeEnum = new Int32Array( [57] );

let prefixSumAddressIfcTendonTypeEnum = new Uint32Array( [0,13,19,27,32,40,52] );

let slotMapIfcTendonTypeEnum = new Int32Array( [4,1,0,2,3,5] );

let encodedDataIfcTendonTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..WIRE..STRAND..BAR..COATED..NOTDEFINED." );

let IfcTendonTypeEnumSearch = new MinimalPerfectHash< IfcTendonTypeEnum >( gMapIfcTendonTypeEnum, prefixSumAddressIfcTendonTypeEnum, slotMapIfcTendonTypeEnum, encodedDataIfcTendonTypeEnum );

export { IfcTendonTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTendonTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTendonTypeEnum | undefined
{
    return parser.extract< IfcTendonTypeEnum >( IfcTendonTypeEnumSearch, input, cursor, endCursor );
}

