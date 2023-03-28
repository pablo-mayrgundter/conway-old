enum IfcLogicalOperatorEnum {
    LOGICALAND = 0,
    LOGICALOR = 1,
    LOGICALXOR = 2,
    LOGICALNOTAND = 3,
    LOGICALNOTOR = 4,
}
export { IfcLogicalOperatorEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcLogicalOperatorEnum = new Int32Array( [3] );

let prefixSumAddressIfcLogicalOperatorEnum = new Uint32Array( [0,15,27,38,50,64] );

let slotMapIfcLogicalOperatorEnum = new Int32Array( [3,0,1,2,4] );

let encodedDataIfcLogicalOperatorEnum = (new TextEncoder()).encode( ".LOGICALNOTAND..LOGICALAND..LOGICALOR..LOGICALXOR..LOGICALNOTOR." );

let IfcLogicalOperatorEnumSearch = new MinimalPerfectHash< IfcLogicalOperatorEnum >( gMapIfcLogicalOperatorEnum, prefixSumAddressIfcLogicalOperatorEnum, slotMapIfcLogicalOperatorEnum, encodedDataIfcLogicalOperatorEnum );

export { IfcLogicalOperatorEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcLogicalOperatorEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcLogicalOperatorEnum | undefined
{
    return parser.extract< IfcLogicalOperatorEnum >( IfcLogicalOperatorEnumSearch, input, cursor, endCursor );
}
