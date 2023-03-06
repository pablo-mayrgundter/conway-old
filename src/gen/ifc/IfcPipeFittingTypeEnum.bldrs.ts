enum IfcPipeFittingTypeEnum {
    BEND = 0,
    CONNECTOR = 1,
    ENTRY = 2,
    EXIT = 3,
    JUNCTION = 4,
    OBSTRUCTION = 5,
    TRANSITION = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export default IfcPipeFittingTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPipeFittingTypeEnum = new Int32Array( [1,15,-1] );

let prefixSumAddressIfcPipeFittingTypeEnum = new Uint32Array( [0,11,23,36,48,54,64,77,83,90] );

let slotMapIfcPipeFittingTypeEnum = new Int32Array( [1,8,5,6,0,4,7,3,2] );

let encodedDataIfcPipeFittingTypeEnum = (new TextEncoder()).encode( ".CONNECTOR..NOTDEFINED..OBSTRUCTION..TRANSITION..BEND..JUNCTION..USERDEFINED..EXIT..ENTRY." );

let IfcPipeFittingTypeEnumSearch = new MinimalPerfectHash< IfcPipeFittingTypeEnum >( gMapIfcPipeFittingTypeEnum, prefixSumAddressIfcPipeFittingTypeEnum, slotMapIfcPipeFittingTypeEnum, encodedDataIfcPipeFittingTypeEnum );

export { IfcPipeFittingTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPipeFittingTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPipeFittingTypeEnum | undefined
{
    return parser.extract< IfcPipeFittingTypeEnum >( IfcPipeFittingTypeEnumSearch, input, cursor, endCursor );
}

