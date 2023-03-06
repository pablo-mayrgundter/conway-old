enum IfcDimensionExtentUsage {
    ORIGIN = 0,
    TARGET = 1,
}
export default IfcDimensionExtentUsage;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDimensionExtentUsage = new Int32Array( [1] );

let prefixSumAddressIfcDimensionExtentUsage = new Uint32Array( [0,8,16] );

let slotMapIfcDimensionExtentUsage = new Int32Array( [0,1] );

let encodedDataIfcDimensionExtentUsage = (new TextEncoder()).encode( ".ORIGIN..TARGET." );

let IfcDimensionExtentUsageSearch = new MinimalPerfectHash< IfcDimensionExtentUsage >( gMapIfcDimensionExtentUsage, prefixSumAddressIfcDimensionExtentUsage, slotMapIfcDimensionExtentUsage, encodedDataIfcDimensionExtentUsage );

export { IfcDimensionExtentUsageSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDimensionExtentUsageDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDimensionExtentUsage | undefined
{
    return parser.extract< IfcDimensionExtentUsage >( IfcDimensionExtentUsageSearch, input, cursor, endCursor );
}

