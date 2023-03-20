enum IfcResourceConsumptionEnum {
    CONSUMED = 0,
    PARTIALLYCONSUMED = 1,
    NOTCONSUMED = 2,
    OCCUPIED = 3,
    PARTIALLYOCCUPIED = 4,
    NOTOCCUPIED = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcResourceConsumptionEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcResourceConsumptionEnum = new Int32Array( [21,3,5] );

let prefixSumAddressIfcResourceConsumptionEnum = new Uint32Array( [0,10,20,33,52,65,78,97,109] );

let slotMapIfcResourceConsumptionEnum = new Int32Array( [0,3,6,4,2,5,1,7] );

let encodedDataIfcResourceConsumptionEnum = (new TextEncoder()).encode( ".CONSUMED..OCCUPIED..USERDEFINED..PARTIALLYOCCUPIED..NOTCONSUMED..NOTOCCUPIED..PARTIALLYCONSUMED..NOTDEFINED." );

let IfcResourceConsumptionEnumSearch = new MinimalPerfectHash< IfcResourceConsumptionEnum >( gMapIfcResourceConsumptionEnum, prefixSumAddressIfcResourceConsumptionEnum, slotMapIfcResourceConsumptionEnum, encodedDataIfcResourceConsumptionEnum );

export { IfcResourceConsumptionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcResourceConsumptionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcResourceConsumptionEnum | undefined
{
    return parser.extract< IfcResourceConsumptionEnum >( IfcResourceConsumptionEnumSearch, input, cursor, endCursor );
}
