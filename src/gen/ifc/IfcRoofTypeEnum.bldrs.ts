enum IfcRoofTypeEnum {
    FLAT_ROOF = 0,
    SHED_ROOF = 1,
    GABLE_ROOF = 2,
    HIP_ROOF = 3,
    HIPPED_GABLE_ROOF = 4,
    GAMBREL_ROOF = 5,
    MANSARD_ROOF = 6,
    BARREL_ROOF = 7,
    RAINBOW_ROOF = 8,
    BUTTERFLY_ROOF = 9,
    PAVILION_ROOF = 10,
    DOME_ROOF = 11,
    FREEFORM = 12,
    NOTDEFINED = 13,
}
export default IfcRoofTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcRoofTypeEnum = new Int32Array( [-8,95,1,97] );

let prefixSumAddressIfcRoofTypeEnum = new Uint32Array( [0,11,21,33,46,58,72,83,97,108,123,133,152,166,182] );

let slotMapIfcRoofTypeEnum = new Int32Array( [11,12,2,7,13,5,0,6,1,10,3,4,8,9] );

let encodedDataIfcRoofTypeEnum = (new TextEncoder()).encode( ".DOME_ROOF..FREEFORM..GABLE_ROOF..BARREL_ROOF..NOTDEFINED..GAMBREL_ROOF..FLAT_ROOF..MANSARD_ROOF..SHED_ROOF..PAVILION_ROOF..HIP_ROOF..HIPPED_GABLE_ROOF..RAINBOW_ROOF..BUTTERFLY_ROOF." );

let IfcRoofTypeEnumSearch = new MinimalPerfectHash< IfcRoofTypeEnum >( gMapIfcRoofTypeEnum, prefixSumAddressIfcRoofTypeEnum, slotMapIfcRoofTypeEnum, encodedDataIfcRoofTypeEnum );

export { IfcRoofTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcRoofTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcRoofTypeEnum | undefined
{
    return parser.parse< IfcRoofTypeEnum >( IfcRoofTypeEnumSearch, input, cursor, endCursor );
}

