enum IfcFlowDirectionEnum {
    SOURCE = 0,
    SINK = 1,
    SOURCEANDSINK = 2,
    NOTDEFINED = 3,
}
export default IfcFlowDirectionEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcFlowDirectionEnum = new Int32Array( [3] );

let prefixSumAddressIfcFlowDirectionEnum = new Uint32Array( [0,15,23,35,41] );

let slotMapIfcFlowDirectionEnum = new Int32Array( [2,0,3,1] );

let encodedDataIfcFlowDirectionEnum = (new TextEncoder()).encode( ".SOURCEANDSINK..SOURCE..NOTDEFINED..SINK." );

let IfcFlowDirectionEnumSearch = new MinimalPerfectHash< IfcFlowDirectionEnum >( gMapIfcFlowDirectionEnum, prefixSumAddressIfcFlowDirectionEnum, slotMapIfcFlowDirectionEnum, encodedDataIfcFlowDirectionEnum );

export { IfcFlowDirectionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcFlowDirectionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcFlowDirectionEnum | undefined
{
    return parser.parse< IfcFlowDirectionEnum >( IfcFlowDirectionEnumSearch, input, cursor, endCursor );
}

