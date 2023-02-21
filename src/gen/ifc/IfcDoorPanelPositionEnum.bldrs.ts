enum IfcDoorPanelPositionEnum {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    NOTDEFINED = 3,
}
export default IfcDoorPanelPositionEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDoorPanelPositionEnum = new Int32Array( [2] );

let prefixSumAddressIfcDoorPanelPositionEnum = new Uint32Array( [0,12,19,27,33] );

let slotMapIfcDoorPanelPositionEnum = new Int32Array( [3,2,1,0] );

let encodedDataIfcDoorPanelPositionEnum = (new TextEncoder()).encode( ".NOTDEFINED..RIGHT..MIDDLE..LEFT." );

let IfcDoorPanelPositionEnumSearch = new MinimalPerfectHash< IfcDoorPanelPositionEnum >( gMapIfcDoorPanelPositionEnum, prefixSumAddressIfcDoorPanelPositionEnum, slotMapIfcDoorPanelPositionEnum, encodedDataIfcDoorPanelPositionEnum );

export { IfcDoorPanelPositionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDoorPanelPositionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDoorPanelPositionEnum | undefined
{
    return parser.parse< IfcDoorPanelPositionEnum >( IfcDoorPanelPositionEnumSearch, input, cursor, endCursor );
}

