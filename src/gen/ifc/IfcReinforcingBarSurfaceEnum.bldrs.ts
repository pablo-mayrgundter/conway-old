enum IfcReinforcingBarSurfaceEnum {
    PLAIN = 0,
    TEXTURED = 1,
}
export { IfcReinforcingBarSurfaceEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcReinforcingBarSurfaceEnum = new Int32Array( [1] );

let prefixSumAddressIfcReinforcingBarSurfaceEnum = new Uint32Array( [0,10,17] );

let slotMapIfcReinforcingBarSurfaceEnum = new Int32Array( [1,0] );

let encodedDataIfcReinforcingBarSurfaceEnum = (new TextEncoder()).encode( ".TEXTURED..PLAIN." );

let IfcReinforcingBarSurfaceEnumSearch = new MinimalPerfectHash< IfcReinforcingBarSurfaceEnum >( gMapIfcReinforcingBarSurfaceEnum, prefixSumAddressIfcReinforcingBarSurfaceEnum, slotMapIfcReinforcingBarSurfaceEnum, encodedDataIfcReinforcingBarSurfaceEnum );

export { IfcReinforcingBarSurfaceEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcReinforcingBarSurfaceEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcReinforcingBarSurfaceEnum | undefined
{
    return parser.extract< IfcReinforcingBarSurfaceEnum >( IfcReinforcingBarSurfaceEnumSearch, input, cursor, endCursor );
}

