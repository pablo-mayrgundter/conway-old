enum IfcDoorPanelOperationEnum {
    SWINGING = 0,
    DOUBLE_ACTING = 1,
    SLIDING = 2,
    FOLDING = 3,
    REVOLVING = 4,
    ROLLINGUP = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcDoorPanelOperationEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDoorPanelOperationEnum = new Int32Array( [63,8,0] );

let prefixSumAddressIfcDoorPanelOperationEnum = new Uint32Array( [0,12,23,36,45,55,70,81,90] );

let slotMapIfcDoorPanelOperationEnum = new Int32Array( [7,4,6,3,0,1,5,2] );

let encodedDataIfcDoorPanelOperationEnum = (new TextEncoder()).encode( ".NOTDEFINED..REVOLVING..USERDEFINED..FOLDING..SWINGING..DOUBLE_ACTING..ROLLINGUP..SLIDING." );

let IfcDoorPanelOperationEnumSearch = new MinimalPerfectHash< IfcDoorPanelOperationEnum >( gMapIfcDoorPanelOperationEnum, prefixSumAddressIfcDoorPanelOperationEnum, slotMapIfcDoorPanelOperationEnum, encodedDataIfcDoorPanelOperationEnum );

export { IfcDoorPanelOperationEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDoorPanelOperationEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDoorPanelOperationEnum | undefined
{
    return parser.extract< IfcDoorPanelOperationEnum >( IfcDoorPanelOperationEnumSearch, input, cursor, endCursor );
}
