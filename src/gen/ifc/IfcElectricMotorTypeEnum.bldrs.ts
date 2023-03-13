enum IfcElectricMotorTypeEnum {
    DC = 0,
    INDUCTION = 1,
    POLYPHASE = 2,
    RELUCTANCESYNCHRONOUS = 3,
    SYNCHRONOUS = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcElectricMotorTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcElectricMotorTypeEnum = new Int32Array( [57] );

let prefixSumAddressIfcElectricMotorTypeEnum = new Uint32Array( [0,12,25,38,61,72,83,87] );

let slotMapIfcElectricMotorTypeEnum = new Int32Array( [6,5,4,3,1,2,0] );

let encodedDataIfcElectricMotorTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..USERDEFINED..SYNCHRONOUS..RELUCTANCESYNCHRONOUS..INDUCTION..POLYPHASE..DC." );

let IfcElectricMotorTypeEnumSearch = new MinimalPerfectHash< IfcElectricMotorTypeEnum >( gMapIfcElectricMotorTypeEnum, prefixSumAddressIfcElectricMotorTypeEnum, slotMapIfcElectricMotorTypeEnum, encodedDataIfcElectricMotorTypeEnum );

export { IfcElectricMotorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcElectricMotorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcElectricMotorTypeEnum | undefined
{
    return parser.extract< IfcElectricMotorTypeEnum >( IfcElectricMotorTypeEnumSearch, input, cursor, endCursor );
}

