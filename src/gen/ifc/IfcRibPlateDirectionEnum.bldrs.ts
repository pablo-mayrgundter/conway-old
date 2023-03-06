enum IfcRibPlateDirectionEnum {
    DIRECTION_X = 0,
    DIRECTION_Y = 1,
}
export default IfcRibPlateDirectionEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcRibPlateDirectionEnum = new Int32Array( [2] );

let prefixSumAddressIfcRibPlateDirectionEnum = new Uint32Array( [0,13,26] );

let slotMapIfcRibPlateDirectionEnum = new Int32Array( [0,1] );

let encodedDataIfcRibPlateDirectionEnum = (new TextEncoder()).encode( ".DIRECTION_X..DIRECTION_Y." );

let IfcRibPlateDirectionEnumSearch = new MinimalPerfectHash< IfcRibPlateDirectionEnum >( gMapIfcRibPlateDirectionEnum, prefixSumAddressIfcRibPlateDirectionEnum, slotMapIfcRibPlateDirectionEnum, encodedDataIfcRibPlateDirectionEnum );

export { IfcRibPlateDirectionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcRibPlateDirectionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcRibPlateDirectionEnum | undefined
{
    return parser.extract< IfcRibPlateDirectionEnum >( IfcRibPlateDirectionEnumSearch, input, cursor, endCursor );
}

