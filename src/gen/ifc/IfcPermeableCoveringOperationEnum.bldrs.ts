enum IfcPermeableCoveringOperationEnum {
    GRILL = 0,
    LOUVER = 1,
    SCREEN = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export default IfcPermeableCoveringOperationEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcPermeableCoveringOperationEnum = new Int32Array( [11] );

let prefixSumAddressIfcPermeableCoveringOperationEnum = new Uint32Array( [0,7,19,32,40,48] );

let slotMapIfcPermeableCoveringOperationEnum = new Int32Array( [0,4,3,2,1] );

let encodedDataIfcPermeableCoveringOperationEnum = (new TextEncoder()).encode( ".GRILL..NOTDEFINED..USERDEFINED..SCREEN..LOUVER." );

let IfcPermeableCoveringOperationEnumSearch = new MinimalPerfectHash< IfcPermeableCoveringOperationEnum >( gMapIfcPermeableCoveringOperationEnum, prefixSumAddressIfcPermeableCoveringOperationEnum, slotMapIfcPermeableCoveringOperationEnum, encodedDataIfcPermeableCoveringOperationEnum );

export { IfcPermeableCoveringOperationEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcPermeableCoveringOperationEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcPermeableCoveringOperationEnum | undefined
{
    return parser.parse< IfcPermeableCoveringOperationEnum >( IfcPermeableCoveringOperationEnumSearch, input, cursor, endCursor );
}

