enum IfcHeatExchangerTypeEnum {
    PLATE = 0,
    SHELLANDTUBE = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export default IfcHeatExchangerTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcHeatExchangerTypeEnum = new Int32Array( [11] );

let prefixSumAddressIfcHeatExchangerTypeEnum = new Uint32Array( [0,14,27,34,46] );

let slotMapIfcHeatExchangerTypeEnum = new Int32Array( [1,2,0,3] );

let encodedDataIfcHeatExchangerTypeEnum = (new TextEncoder()).encode( ".SHELLANDTUBE..USERDEFINED..PLATE..NOTDEFINED." );

let IfcHeatExchangerTypeEnumSearch = new MinimalPerfectHash< IfcHeatExchangerTypeEnum >( gMapIfcHeatExchangerTypeEnum, prefixSumAddressIfcHeatExchangerTypeEnum, slotMapIfcHeatExchangerTypeEnum, encodedDataIfcHeatExchangerTypeEnum );

export { IfcHeatExchangerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcHeatExchangerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcHeatExchangerTypeEnum | undefined
{
    return parser.extract< IfcHeatExchangerTypeEnum >( IfcHeatExchangerTypeEnumSearch, input, cursor, endCursor );
}

