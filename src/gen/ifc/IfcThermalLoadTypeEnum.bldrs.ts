enum IfcThermalLoadTypeEnum {
    SENSIBLE = 0,
    LATENT = 1,
    RADIANT = 2,
    NOTDEFINED = 3,
}
export { IfcThermalLoadTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcThermalLoadTypeEnum = new Int32Array( [7] );

let prefixSumAddressIfcThermalLoadTypeEnum = new Uint32Array( [0,12,21,29,39] );

let slotMapIfcThermalLoadTypeEnum = new Int32Array( [3,2,1,0] );

let encodedDataIfcThermalLoadTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..RADIANT..LATENT..SENSIBLE." );

let IfcThermalLoadTypeEnumSearch = new MinimalPerfectHash< IfcThermalLoadTypeEnum >( gMapIfcThermalLoadTypeEnum, prefixSumAddressIfcThermalLoadTypeEnum, slotMapIfcThermalLoadTypeEnum, encodedDataIfcThermalLoadTypeEnum );

export { IfcThermalLoadTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcThermalLoadTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcThermalLoadTypeEnum | undefined
{
    return parser.extract< IfcThermalLoadTypeEnum >( IfcThermalLoadTypeEnumSearch, input, cursor, endCursor );
}

