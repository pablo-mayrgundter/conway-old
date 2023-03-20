enum IfcInternalOrExternalEnum {
    INTERNAL = 0,
    EXTERNAL = 1,
    NOTDEFINED = 2,
}
export { IfcInternalOrExternalEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcInternalOrExternalEnum = new Int32Array( [1] );

let prefixSumAddressIfcInternalOrExternalEnum = new Uint32Array( [0,10,20,32] );

let slotMapIfcInternalOrExternalEnum = new Int32Array( [0,1,2] );

let encodedDataIfcInternalOrExternalEnum = (new TextEncoder()).encode( ".INTERNAL..EXTERNAL..NOTDEFINED." );

let IfcInternalOrExternalEnumSearch = new MinimalPerfectHash< IfcInternalOrExternalEnum >( gMapIfcInternalOrExternalEnum, prefixSumAddressIfcInternalOrExternalEnum, slotMapIfcInternalOrExternalEnum, encodedDataIfcInternalOrExternalEnum );

export { IfcInternalOrExternalEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcInternalOrExternalEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcInternalOrExternalEnum | undefined
{
    return parser.extract< IfcInternalOrExternalEnum >( IfcInternalOrExternalEnumSearch, input, cursor, endCursor );
}
