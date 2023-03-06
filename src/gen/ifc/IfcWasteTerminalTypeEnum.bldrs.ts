enum IfcWasteTerminalTypeEnum {
    FLOORTRAP = 0,
    FLOORWASTE = 1,
    GULLYSUMP = 2,
    GULLYTRAP = 3,
    GREASEINTERCEPTOR = 4,
    OILINTERCEPTOR = 5,
    PETROLINTERCEPTOR = 6,
    ROOFDRAIN = 7,
    WASTEDISPOSALUNIT = 8,
    WASTETRAP = 9,
    USERDEFINED = 10,
    NOTDEFINED = 11,
}
export default IfcWasteTerminalTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcWasteTerminalTypeEnum = new Int32Array( [-2,1,94] );

let prefixSumAddressIfcWasteTerminalTypeEnum = new Uint32Array( [0,11,27,40,51,62,73,92,111,123,142,153,165] );

let slotMapIfcWasteTerminalTypeEnum = new Int32Array( [3,5,10,2,9,7,8,4,1,6,0,11] );

let encodedDataIfcWasteTerminalTypeEnum = (new TextEncoder()).encode( ".GULLYTRAP..OILINTERCEPTOR..USERDEFINED..GULLYSUMP..WASTETRAP..ROOFDRAIN..WASTEDISPOSALUNIT..GREASEINTERCEPTOR..FLOORWASTE..PETROLINTERCEPTOR..FLOORTRAP..NOTDEFINED." );

let IfcWasteTerminalTypeEnumSearch = new MinimalPerfectHash< IfcWasteTerminalTypeEnum >( gMapIfcWasteTerminalTypeEnum, prefixSumAddressIfcWasteTerminalTypeEnum, slotMapIfcWasteTerminalTypeEnum, encodedDataIfcWasteTerminalTypeEnum );

export { IfcWasteTerminalTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcWasteTerminalTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcWasteTerminalTypeEnum | undefined
{
    return parser.extract< IfcWasteTerminalTypeEnum >( IfcWasteTerminalTypeEnumSearch, input, cursor, endCursor );
}

