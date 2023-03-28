enum IfcBuildingElementPartTypeEnum {
    INSULATION = 0,
    PRECASTPANEL = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export { IfcBuildingElementPartTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBuildingElementPartTypeEnum = new Int32Array( [11] );

let prefixSumAddressIfcBuildingElementPartTypeEnum = new Uint32Array( [0,14,27,39,51] );

let slotMapIfcBuildingElementPartTypeEnum = new Int32Array( [1,2,0,3] );

let encodedDataIfcBuildingElementPartTypeEnum = (new TextEncoder()).encode( ".PRECASTPANEL..USERDEFINED..INSULATION..NOTDEFINED." );

let IfcBuildingElementPartTypeEnumSearch = new MinimalPerfectHash< IfcBuildingElementPartTypeEnum >( gMapIfcBuildingElementPartTypeEnum, prefixSumAddressIfcBuildingElementPartTypeEnum, slotMapIfcBuildingElementPartTypeEnum, encodedDataIfcBuildingElementPartTypeEnum );

export { IfcBuildingElementPartTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBuildingElementPartTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBuildingElementPartTypeEnum | undefined
{
    return parser.extract< IfcBuildingElementPartTypeEnum >( IfcBuildingElementPartTypeEnumSearch, input, cursor, endCursor );
}
