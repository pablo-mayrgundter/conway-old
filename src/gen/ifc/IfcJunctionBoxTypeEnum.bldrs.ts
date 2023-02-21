enum IfcJunctionBoxTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
export default IfcJunctionBoxTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcJunctionBoxTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcJunctionBoxTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcJunctionBoxTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcJunctionBoxTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcJunctionBoxTypeEnumSearch = new MinimalPerfectHash< IfcJunctionBoxTypeEnum >( gMapIfcJunctionBoxTypeEnum, prefixSumAddressIfcJunctionBoxTypeEnum, slotMapIfcJunctionBoxTypeEnum, encodedDataIfcJunctionBoxTypeEnum );

export { IfcJunctionBoxTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcJunctionBoxTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcJunctionBoxTypeEnum | undefined
{
    return parser.parse< IfcJunctionBoxTypeEnum >( IfcJunctionBoxTypeEnumSearch, input, cursor, endCursor );
}

