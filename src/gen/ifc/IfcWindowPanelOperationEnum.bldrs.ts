enum IfcWindowPanelOperationEnum {
    SIDEHUNGRIGHTHAND = 0,
    SIDEHUNGLEFTHAND = 1,
    TILTANDTURNRIGHTHAND = 2,
    TILTANDTURNLEFTHAND = 3,
    TOPHUNG = 4,
    BOTTOMHUNG = 5,
    PIVOTHORIZONTAL = 6,
    PIVOTVERTICAL = 7,
    SLIDINGHORIZONTAL = 8,
    SLIDINGVERTICAL = 9,
    REMOVABLECASEMENT = 10,
    FIXEDCASEMENT = 11,
    OTHEROPERATION = 12,
    NOTDEFINED = 13,
}
export { IfcWindowPanelOperationEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcWindowPanelOperationEnum = new Int32Array( [1,4,192,19] );

let prefixSumAddressIfcWindowPanelOperationEnum = new Uint32Array( [0,15,27,46,68,83,101,118,134,155,167,184,203,222,231] );

let slotMapIfcWindowPanelOperationEnum = new Int32Array( [11,13,8,2,7,1,6,12,3,5,9,0,10,4] );

let encodedDataIfcWindowPanelOperationEnum = (new TextEncoder()).encode( ".FIXEDCASEMENT..NOTDEFINED..SLIDINGHORIZONTAL..TILTANDTURNRIGHTHAND..PIVOTVERTICAL..SIDEHUNGLEFTHAND..PIVOTHORIZONTAL..OTHEROPERATION..TILTANDTURNLEFTHAND..BOTTOMHUNG..SLIDINGVERTICAL..SIDEHUNGRIGHTHAND..REMOVABLECASEMENT..TOPHUNG." );

let IfcWindowPanelOperationEnumSearch = new MinimalPerfectHash< IfcWindowPanelOperationEnum >( gMapIfcWindowPanelOperationEnum, prefixSumAddressIfcWindowPanelOperationEnum, slotMapIfcWindowPanelOperationEnum, encodedDataIfcWindowPanelOperationEnum );

export { IfcWindowPanelOperationEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcWindowPanelOperationEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcWindowPanelOperationEnum | undefined
{
    return parser.extract< IfcWindowPanelOperationEnum >( IfcWindowPanelOperationEnumSearch, input, cursor, endCursor );
}

