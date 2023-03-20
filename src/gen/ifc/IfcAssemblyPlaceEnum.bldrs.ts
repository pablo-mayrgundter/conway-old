enum IfcAssemblyPlaceEnum {
    SITE = 0,
    FACTORY = 1,
    NOTDEFINED = 2,
}
export { IfcAssemblyPlaceEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAssemblyPlaceEnum = new Int32Array( [2] );

let prefixSumAddressIfcAssemblyPlaceEnum = new Uint32Array( [0,9,21,27] );

let slotMapIfcAssemblyPlaceEnum = new Int32Array( [1,2,0] );

let encodedDataIfcAssemblyPlaceEnum = (new TextEncoder()).encode( ".FACTORY..NOTDEFINED..SITE." );

let IfcAssemblyPlaceEnumSearch = new MinimalPerfectHash< IfcAssemblyPlaceEnum >( gMapIfcAssemblyPlaceEnum, prefixSumAddressIfcAssemblyPlaceEnum, slotMapIfcAssemblyPlaceEnum, encodedDataIfcAssemblyPlaceEnum );

export { IfcAssemblyPlaceEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAssemblyPlaceEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAssemblyPlaceEnum | undefined
{
    return parser.extract< IfcAssemblyPlaceEnum >( IfcAssemblyPlaceEnumSearch, input, cursor, endCursor );
}
