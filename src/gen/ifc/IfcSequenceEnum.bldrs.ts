enum IfcSequenceEnum {
    START_START = 0,
    START_FINISH = 1,
    FINISH_START = 2,
    FINISH_FINISH = 3,
    NOTDEFINED = 4,
}
export { IfcSequenceEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSequenceEnum = new Int32Array( [33] );

let prefixSumAddressIfcSequenceEnum = new Uint32Array( [0,12,26,39,54,68] );

let slotMapIfcSequenceEnum = new Int32Array( [4,2,0,3,1] );

let encodedDataIfcSequenceEnum = (new TextEncoder()).encode( ".NOTDEFINED..FINISH_START..START_START..FINISH_FINISH..START_FINISH." );

let IfcSequenceEnumSearch = new MinimalPerfectHash< IfcSequenceEnum >( gMapIfcSequenceEnum, prefixSumAddressIfcSequenceEnum, slotMapIfcSequenceEnum, encodedDataIfcSequenceEnum );

export { IfcSequenceEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSequenceEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSequenceEnum | undefined
{
    return parser.extract< IfcSequenceEnum >( IfcSequenceEnumSearch, input, cursor, endCursor );
}

