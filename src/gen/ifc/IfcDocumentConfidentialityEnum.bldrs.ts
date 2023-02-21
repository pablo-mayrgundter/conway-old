enum IfcDocumentConfidentialityEnum {
    PUBLIC = 0,
    RESTRICTED = 1,
    CONFIDENTIAL = 2,
    PERSONAL = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export default IfcDocumentConfidentialityEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDocumentConfidentialityEnum = new Int32Array( [101] );

let prefixSumAddressIfcDocumentConfidentialityEnum = new Uint32Array( [0,12,24,37,51,59,69] );

let slotMapIfcDocumentConfidentialityEnum = new Int32Array( [5,1,4,2,0,3] );

let encodedDataIfcDocumentConfidentialityEnum = (new TextEncoder()).encode( ".NOTDEFINED..RESTRICTED..USERDEFINED..CONFIDENTIAL..PUBLIC..PERSONAL." );

let IfcDocumentConfidentialityEnumSearch = new MinimalPerfectHash< IfcDocumentConfidentialityEnum >( gMapIfcDocumentConfidentialityEnum, prefixSumAddressIfcDocumentConfidentialityEnum, slotMapIfcDocumentConfidentialityEnum, encodedDataIfcDocumentConfidentialityEnum );

export { IfcDocumentConfidentialityEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDocumentConfidentialityEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDocumentConfidentialityEnum | undefined
{
    return parser.parse< IfcDocumentConfidentialityEnum >( IfcDocumentConfidentialityEnumSearch, input, cursor, endCursor );
}

