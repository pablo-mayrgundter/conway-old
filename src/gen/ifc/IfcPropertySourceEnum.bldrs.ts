enum IfcPropertySourceEnum {
    DESIGN = 0,
    DESIGNMAXIMUM = 1,
    DESIGNMINIMUM = 2,
    SIMULATED = 3,
    ASBUILT = 4,
    COMMISSIONING = 5,
    MEASURED = 6,
    USERDEFINED = 7,
    NOTKNOWN = 8,
}
export { IfcPropertySourceEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPropertySourceEnum = new Int32Array( [2,-1,6] );

let prefixSumAddressIfcPropertySourceEnum = new Uint32Array( [0,10,19,34,44,52,67,78,93,106] );

let slotMapIfcPropertySourceEnum = new Int32Array( [6,4,5,8,0,1,3,2,7] );

let encodedDataIfcPropertySourceEnum = (new TextEncoder()).encode( ".MEASURED..ASBUILT..COMMISSIONING..NOTKNOWN..DESIGN..DESIGNMAXIMUM..SIMULATED..DESIGNMINIMUM..USERDEFINED." );

let IfcPropertySourceEnumSearch = new MinimalPerfectHash< IfcPropertySourceEnum >( gMapIfcPropertySourceEnum, prefixSumAddressIfcPropertySourceEnum, slotMapIfcPropertySourceEnum, encodedDataIfcPropertySourceEnum );

export { IfcPropertySourceEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPropertySourceEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPropertySourceEnum | undefined
{
    return parser.extract< IfcPropertySourceEnum >( IfcPropertySourceEnumSearch, input, cursor, endCursor );
}

