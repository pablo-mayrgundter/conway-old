enum IfcLightFixtureTypeEnum {
    POINTSOURCE = 0,
    DIRECTIONSOURCE = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export default IfcLightFixtureTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcLightFixtureTypeEnum = new Int32Array( [14] );

let prefixSumAddressIfcLightFixtureTypeEnum = new Uint32Array( [0,12,29,42,55] );

let slotMapIfcLightFixtureTypeEnum = new Int32Array( [3,1,2,0] );

let encodedDataIfcLightFixtureTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..DIRECTIONSOURCE..USERDEFINED..POINTSOURCE." );

let IfcLightFixtureTypeEnumSearch = new MinimalPerfectHash< IfcLightFixtureTypeEnum >( gMapIfcLightFixtureTypeEnum, prefixSumAddressIfcLightFixtureTypeEnum, slotMapIfcLightFixtureTypeEnum, encodedDataIfcLightFixtureTypeEnum );

export { IfcLightFixtureTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcLightFixtureTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcLightFixtureTypeEnum | undefined
{
    return parser.parse< IfcLightFixtureTypeEnum >( IfcLightFixtureTypeEnumSearch, input, cursor, endCursor );
}

