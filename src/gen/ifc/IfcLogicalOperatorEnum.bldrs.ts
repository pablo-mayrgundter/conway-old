enum IfcLogicalOperatorEnum {
    LOGICALAND = 0,
    LOGICALOR = 1,
}
export default IfcLogicalOperatorEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcLogicalOperatorEnum = new Int32Array( [2] );

let prefixSumAddressIfcLogicalOperatorEnum = new Uint32Array( [0,12,23] );

let slotMapIfcLogicalOperatorEnum = new Int32Array( [0,1] );

let encodedDataIfcLogicalOperatorEnum = (new TextEncoder()).encode( ".LOGICALAND..LOGICALOR." );

let IfcLogicalOperatorEnumSearch = new MinimalPerfectHash< IfcLogicalOperatorEnum >( gMapIfcLogicalOperatorEnum, prefixSumAddressIfcLogicalOperatorEnum, slotMapIfcLogicalOperatorEnum, encodedDataIfcLogicalOperatorEnum );

export { IfcLogicalOperatorEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcLogicalOperatorEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcLogicalOperatorEnum | undefined
{
    return parser.parse< IfcLogicalOperatorEnum >( IfcLogicalOperatorEnumSearch, input, cursor, endCursor );
}

