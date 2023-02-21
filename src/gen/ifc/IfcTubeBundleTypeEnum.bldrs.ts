enum IfcTubeBundleTypeEnum {
    FINNED = 0,
    USERDEFINED = 1,
    NOTDEFINED = 2,
}
export default IfcTubeBundleTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTubeBundleTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcTubeBundleTypeEnum = new Uint32Array( [0,13,21,33] );

let slotMapIfcTubeBundleTypeEnum = new Int32Array( [1,0,2] );

let encodedDataIfcTubeBundleTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..FINNED..NOTDEFINED." );

let IfcTubeBundleTypeEnumSearch = new MinimalPerfectHash< IfcTubeBundleTypeEnum >( gMapIfcTubeBundleTypeEnum, prefixSumAddressIfcTubeBundleTypeEnum, slotMapIfcTubeBundleTypeEnum, encodedDataIfcTubeBundleTypeEnum );

export { IfcTubeBundleTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTubeBundleTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTubeBundleTypeEnum | undefined
{
    return parser.parse< IfcTubeBundleTypeEnum >( IfcTubeBundleTypeEnumSearch, input, cursor, endCursor );
}

