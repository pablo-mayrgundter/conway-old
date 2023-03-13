enum IfcControllerTypeEnum {
    FLOATING = 0,
    PROPORTIONAL = 1,
    PROPORTIONALINTEGRAL = 2,
    PROPORTIONALINTEGRALDERIVATIVE = 3,
    TIMEDTWOPOSITION = 4,
    TWOPOSITION = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcControllerTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcControllerTypeEnum = new Int32Array( [11,0,102] );

let prefixSumAddressIfcControllerTypeEnum = new Uint32Array( [0,10,23,45,77,95,107,120,134] );

let slotMapIfcControllerTypeEnum = new Int32Array( [0,6,2,3,4,7,5,1] );

let encodedDataIfcControllerTypeEnum = (new TextEncoder()).encode( ".FLOATING..USERDEFINED..PROPORTIONALINTEGRAL..PROPORTIONALINTEGRALDERIVATIVE..TIMEDTWOPOSITION..NOTDEFINED..TWOPOSITION..PROPORTIONAL." );

let IfcControllerTypeEnumSearch = new MinimalPerfectHash< IfcControllerTypeEnum >( gMapIfcControllerTypeEnum, prefixSumAddressIfcControllerTypeEnum, slotMapIfcControllerTypeEnum, encodedDataIfcControllerTypeEnum );

export { IfcControllerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcControllerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcControllerTypeEnum | undefined
{
    return parser.extract< IfcControllerTypeEnum >( IfcControllerTypeEnumSearch, input, cursor, endCursor );
}

