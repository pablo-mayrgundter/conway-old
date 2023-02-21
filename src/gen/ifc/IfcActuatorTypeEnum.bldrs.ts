enum IfcActuatorTypeEnum {
    ELECTRICACTUATOR = 0,
    HANDOPERATEDACTUATOR = 1,
    HYDRAULICACTUATOR = 2,
    PNEUMATICACTUATOR = 3,
    THERMOSTATICACTUATOR = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export default IfcActuatorTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcActuatorTypeEnum = new Int32Array( [175] );

let prefixSumAddressIfcActuatorTypeEnum = new Uint32Array( [0,13,32,51,73,85,107,125] );

let slotMapIfcActuatorTypeEnum = new Int32Array( [5,3,2,4,6,1,0] );

let encodedDataIfcActuatorTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..PNEUMATICACTUATOR..HYDRAULICACTUATOR..THERMOSTATICACTUATOR..NOTDEFINED..HANDOPERATEDACTUATOR..ELECTRICACTUATOR." );

let IfcActuatorTypeEnumSearch = new MinimalPerfectHash< IfcActuatorTypeEnum >( gMapIfcActuatorTypeEnum, prefixSumAddressIfcActuatorTypeEnum, slotMapIfcActuatorTypeEnum, encodedDataIfcActuatorTypeEnum );

export { IfcActuatorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcActuatorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcActuatorTypeEnum | undefined
{
    return parser.parse< IfcActuatorTypeEnum >( IfcActuatorTypeEnumSearch, input, cursor, endCursor );
}

