enum IfcThermalLoadSourceEnum {
    PEOPLE = 0,
    LIGHTING = 1,
    EQUIPMENT = 2,
    VENTILATIONINDOORAIR = 3,
    VENTILATIONOUTSIDEAIR = 4,
    RECIRCULATEDAIR = 5,
    EXHAUSTAIR = 6,
    AIREXCHANGERATE = 7,
    DRYBULBTEMPERATURE = 8,
    RELATIVEHUMIDITY = 9,
    INFILTRATION = 10,
    USERDEFINED = 11,
    NOTDEFINED = 12,
}
export default IfcThermalLoadSourceEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcThermalLoadSourceEnum = new Int32Array( [49,2,6,15] );

let prefixSumAddressIfcThermalLoadSourceEnum = new Uint32Array( [0,17,25,45,56,69,87,99,121,138,148,162,174,197] );

let slotMapIfcThermalLoadSourceEnum = new Int32Array( [7,0,8,2,11,9,12,3,5,1,10,6,4] );

let encodedDataIfcThermalLoadSourceEnum = (new TextEncoder()).encode( ".AIREXCHANGERATE..PEOPLE..DRYBULBTEMPERATURE..EQUIPMENT..USERDEFINED..RELATIVEHUMIDITY..NOTDEFINED..VENTILATIONINDOORAIR..RECIRCULATEDAIR..LIGHTING..INFILTRATION..EXHAUSTAIR..VENTILATIONOUTSIDEAIR." );

let IfcThermalLoadSourceEnumSearch = new MinimalPerfectHash< IfcThermalLoadSourceEnum >( gMapIfcThermalLoadSourceEnum, prefixSumAddressIfcThermalLoadSourceEnum, slotMapIfcThermalLoadSourceEnum, encodedDataIfcThermalLoadSourceEnum );

export { IfcThermalLoadSourceEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcThermalLoadSourceEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcThermalLoadSourceEnum | undefined
{
    return parser.extract< IfcThermalLoadSourceEnum >( IfcThermalLoadSourceEnumSearch, input, cursor, endCursor );
}

