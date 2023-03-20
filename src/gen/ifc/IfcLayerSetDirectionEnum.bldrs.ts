enum IfcLayerSetDirectionEnum {
    AXIS1 = 0,
    AXIS2 = 1,
    AXIS3 = 2,
}
export { IfcLayerSetDirectionEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcLayerSetDirectionEnum = new Int32Array( [4] );

let prefixSumAddressIfcLayerSetDirectionEnum = new Uint32Array( [0,7,14,21] );

let slotMapIfcLayerSetDirectionEnum = new Int32Array( [2,1,0] );

let encodedDataIfcLayerSetDirectionEnum = (new TextEncoder()).encode( ".AXIS3..AXIS2..AXIS1." );

let IfcLayerSetDirectionEnumSearch = new MinimalPerfectHash< IfcLayerSetDirectionEnum >( gMapIfcLayerSetDirectionEnum, prefixSumAddressIfcLayerSetDirectionEnum, slotMapIfcLayerSetDirectionEnum, encodedDataIfcLayerSetDirectionEnum );

export { IfcLayerSetDirectionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcLayerSetDirectionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcLayerSetDirectionEnum | undefined
{
    return parser.extract< IfcLayerSetDirectionEnum >( IfcLayerSetDirectionEnumSearch, input, cursor, endCursor );
}
