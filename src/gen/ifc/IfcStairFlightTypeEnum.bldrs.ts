enum IfcStairFlightTypeEnum {
    STRAIGHT = 0,
    WINDER = 1,
    SPIRAL = 2,
    CURVED = 3,
    FREEFORM = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export default IfcStairFlightTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcStairFlightTypeEnum = new Int32Array( [721] );

let prefixSumAddressIfcStairFlightTypeEnum = new Uint32Array( [0,13,21,29,39,47,59,69] );

let slotMapIfcStairFlightTypeEnum = new Int32Array( [5,2,1,4,3,6,0] );

let encodedDataIfcStairFlightTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..SPIRAL..WINDER..FREEFORM..CURVED..NOTDEFINED..STRAIGHT." );

let IfcStairFlightTypeEnumSearch = new MinimalPerfectHash< IfcStairFlightTypeEnum >( gMapIfcStairFlightTypeEnum, prefixSumAddressIfcStairFlightTypeEnum, slotMapIfcStairFlightTypeEnum, encodedDataIfcStairFlightTypeEnum );

export { IfcStairFlightTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcStairFlightTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcStairFlightTypeEnum | undefined
{
    return parser.parse< IfcStairFlightTypeEnum >( IfcStairFlightTypeEnumSearch, input, cursor, endCursor );
}

