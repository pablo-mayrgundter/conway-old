enum IfcComplexPropertyTemplateTypeEnum {
    P_COMPLEX = 0,
    Q_COMPLEX = 1,
}
export { IfcComplexPropertyTemplateTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcComplexPropertyTemplateTypeEnum = new Int32Array( [7] );

let prefixSumAddressIfcComplexPropertyTemplateTypeEnum = new Uint32Array( [0,11,22] );

let slotMapIfcComplexPropertyTemplateTypeEnum = new Int32Array( [1,0] );

let encodedDataIfcComplexPropertyTemplateTypeEnum = (new TextEncoder()).encode( ".Q_COMPLEX..P_COMPLEX." );

let IfcComplexPropertyTemplateTypeEnumSearch = new MinimalPerfectHash< IfcComplexPropertyTemplateTypeEnum >( gMapIfcComplexPropertyTemplateTypeEnum, prefixSumAddressIfcComplexPropertyTemplateTypeEnum, slotMapIfcComplexPropertyTemplateTypeEnum, encodedDataIfcComplexPropertyTemplateTypeEnum );

export { IfcComplexPropertyTemplateTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcComplexPropertyTemplateTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcComplexPropertyTemplateTypeEnum | undefined
{
    return parser.extract< IfcComplexPropertyTemplateTypeEnum >( IfcComplexPropertyTemplateTypeEnumSearch, input, cursor, endCursor );
}
