enum IfcDamperTypeEnum {
    CONTROLDAMPER = 0,
    FIREDAMPER = 1,
    SMOKEDAMPER = 2,
    FIRESMOKEDAMPER = 3,
    BACKDRAFTDAMPER = 4,
    RELIEFDAMPER = 5,
    BLASTDAMPER = 6,
    GRAVITYDAMPER = 7,
    GRAVITYRELIEFDAMPER = 8,
    BALANCINGDAMPER = 9,
    FUMEHOODEXHAUST = 10,
    USERDEFINED = 11,
    NOTDEFINED = 12,
}
export default IfcDamperTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDamperTypeEnum = new Int32Array( [-2,23,37,7] );

let prefixSumAddressIfcDamperTypeEnum = new Uint32Array( [0,15,32,49,62,74,88,105,120,133,146,158,175,196] );

let slotMapIfcDamperTypeEnum = new Int32Array( [7,9,10,2,1,5,4,0,11,6,12,3,8] );

let encodedDataIfcDamperTypeEnum = (new TextEncoder()).encode( ".GRAVITYDAMPER..BALANCINGDAMPER..FUMEHOODEXHAUST..SMOKEDAMPER..FIREDAMPER..RELIEFDAMPER..BACKDRAFTDAMPER..CONTROLDAMPER..USERDEFINED..BLASTDAMPER..NOTDEFINED..FIRESMOKEDAMPER..GRAVITYRELIEFDAMPER." );

let IfcDamperTypeEnumSearch = new MinimalPerfectHash< IfcDamperTypeEnum >( gMapIfcDamperTypeEnum, prefixSumAddressIfcDamperTypeEnum, slotMapIfcDamperTypeEnum, encodedDataIfcDamperTypeEnum );

export { IfcDamperTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDamperTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDamperTypeEnum | undefined
{
    return parser.extract< IfcDamperTypeEnum >( IfcDamperTypeEnumSearch, input, cursor, endCursor );
}

