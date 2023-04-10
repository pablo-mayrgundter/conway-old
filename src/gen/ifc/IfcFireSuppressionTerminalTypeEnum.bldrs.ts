enum IfcFireSuppressionTerminalTypeEnum {
    BREECHINGINLET = 0,
    FIREHYDRANT = 1,
    HOSEREEL = 2,
    SPRINKLER = 3,
    SPRINKLERDEFLECTOR = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
const IfcFireSuppressionTerminalTypeEnumCount = 7;

export { IfcFireSuppressionTerminalTypeEnum, IfcFireSuppressionTerminalTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcFireSuppressionTerminalTypeEnum = new Int32Array( [403] );

let prefixSumAddressIfcFireSuppressionTerminalTypeEnum = new Uint32Array( [0,13,24,37,57,67,79,95] );

let slotMapIfcFireSuppressionTerminalTypeEnum = new Int32Array( [5,3,1,4,2,6,0] );

let encodedDataIfcFireSuppressionTerminalTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..SPRINKLER..FIREHYDRANT..SPRINKLERDEFLECTOR..HOSEREEL..NOTDEFINED..BREECHINGINLET." );

let IfcFireSuppressionTerminalTypeEnumSearch = new MinimalPerfectHash< IfcFireSuppressionTerminalTypeEnum >( gMapIfcFireSuppressionTerminalTypeEnum, prefixSumAddressIfcFireSuppressionTerminalTypeEnum, slotMapIfcFireSuppressionTerminalTypeEnum, encodedDataIfcFireSuppressionTerminalTypeEnum );

export { IfcFireSuppressionTerminalTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcFireSuppressionTerminalTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcFireSuppressionTerminalTypeEnum | undefined
{
    return parser.extract< IfcFireSuppressionTerminalTypeEnum >( IfcFireSuppressionTerminalTypeEnumSearch, input, cursor, endCursor );
}
