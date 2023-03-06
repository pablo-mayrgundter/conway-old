enum IfcWindowPanelPositionEnum {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    BOTTOM = 3,
    TOP = 4,
    NOTDEFINED = 5,
}
export default IfcWindowPanelPositionEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcWindowPanelPositionEnum = new Int32Array( [54] );

let prefixSumAddressIfcWindowPanelPositionEnum = new Uint32Array( [0,6,14,26,33,38,46] );

let slotMapIfcWindowPanelPositionEnum = new Int32Array( [0,1,5,2,4,3] );

let encodedDataIfcWindowPanelPositionEnum = (new TextEncoder()).encode( ".LEFT..MIDDLE..NOTDEFINED..RIGHT..TOP..BOTTOM." );

let IfcWindowPanelPositionEnumSearch = new MinimalPerfectHash< IfcWindowPanelPositionEnum >( gMapIfcWindowPanelPositionEnum, prefixSumAddressIfcWindowPanelPositionEnum, slotMapIfcWindowPanelPositionEnum, encodedDataIfcWindowPanelPositionEnum );

export { IfcWindowPanelPositionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcWindowPanelPositionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcWindowPanelPositionEnum | undefined
{
    return parser.extract< IfcWindowPanelPositionEnum >( IfcWindowPanelPositionEnumSearch, input, cursor, endCursor );
}

