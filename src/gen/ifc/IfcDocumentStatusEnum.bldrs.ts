enum IfcDocumentStatusEnum {
    DRAFT = 0,
    FINALDRAFT = 1,
    FINAL = 2,
    REVISION = 3,
    NOTDEFINED = 4,
}
export default IfcDocumentStatusEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDocumentStatusEnum = new Int32Array( [9] );

let prefixSumAddressIfcDocumentStatusEnum = new Uint32Array( [0,7,19,29,41,48] );

let slotMapIfcDocumentStatusEnum = new Int32Array( [0,4,3,1,2] );

let encodedDataIfcDocumentStatusEnum = (new TextEncoder()).encode( ".DRAFT..NOTDEFINED..REVISION..FINALDRAFT..FINAL." );

let IfcDocumentStatusEnumSearch = new MinimalPerfectHash< IfcDocumentStatusEnum >( gMapIfcDocumentStatusEnum, prefixSumAddressIfcDocumentStatusEnum, slotMapIfcDocumentStatusEnum, encodedDataIfcDocumentStatusEnum );

export { IfcDocumentStatusEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDocumentStatusEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDocumentStatusEnum | undefined
{
    return parser.parse< IfcDocumentStatusEnum >( IfcDocumentStatusEnumSearch, input, cursor, endCursor );
}

