enum IfcDirectionSenseEnum {
    POSITIVE = 0,
    NEGATIVE = 1,
}
export { IfcDirectionSenseEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDirectionSenseEnum = new Int32Array( [1] );

let prefixSumAddressIfcDirectionSenseEnum = new Uint32Array( [0,10,20] );

let slotMapIfcDirectionSenseEnum = new Int32Array( [1,0] );

let encodedDataIfcDirectionSenseEnum = (new TextEncoder()).encode( ".NEGATIVE..POSITIVE." );

let IfcDirectionSenseEnumSearch = new MinimalPerfectHash< IfcDirectionSenseEnum >( gMapIfcDirectionSenseEnum, prefixSumAddressIfcDirectionSenseEnum, slotMapIfcDirectionSenseEnum, encodedDataIfcDirectionSenseEnum );

export { IfcDirectionSenseEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDirectionSenseEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDirectionSenseEnum | undefined
{
    return parser.extract< IfcDirectionSenseEnum >( IfcDirectionSenseEnumSearch, input, cursor, endCursor );
}

