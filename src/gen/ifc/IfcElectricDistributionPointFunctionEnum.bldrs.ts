enum IfcElectricDistributionPointFunctionEnum {
    ALARMPANEL = 0,
    CONSUMERUNIT = 1,
    CONTROLPANEL = 2,
    DISTRIBUTIONBOARD = 3,
    GASDETECTORPANEL = 4,
    INDICATORPANEL = 5,
    MIMICPANEL = 6,
    MOTORCONTROLCENTRE = 7,
    SWITCHBOARD = 8,
    USERDEFINED = 9,
    NOTDEFINED = 10,
}
export { IfcElectricDistributionPointFunctionEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcElectricDistributionPointFunctionEnum = new Int32Array( [72,62,5] );

let prefixSumAddressIfcElectricDistributionPointFunctionEnum = new Uint32Array( [0,14,26,46,65,78,92,105,121,139,151,163] );

let slotMapIfcElectricDistributionPointFunctionEnum = new Int32Array( [2,6,7,3,9,1,8,5,4,0,10] );

let encodedDataIfcElectricDistributionPointFunctionEnum = (new TextEncoder()).encode( ".CONTROLPANEL..MIMICPANEL..MOTORCONTROLCENTRE..DISTRIBUTIONBOARD..USERDEFINED..CONSUMERUNIT..SWITCHBOARD..INDICATORPANEL..GASDETECTORPANEL..ALARMPANEL..NOTDEFINED." );

let IfcElectricDistributionPointFunctionEnumSearch = new MinimalPerfectHash< IfcElectricDistributionPointFunctionEnum >( gMapIfcElectricDistributionPointFunctionEnum, prefixSumAddressIfcElectricDistributionPointFunctionEnum, slotMapIfcElectricDistributionPointFunctionEnum, encodedDataIfcElectricDistributionPointFunctionEnum );

export { IfcElectricDistributionPointFunctionEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcElectricDistributionPointFunctionEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcElectricDistributionPointFunctionEnum | undefined
{
    return parser.extract< IfcElectricDistributionPointFunctionEnum >( IfcElectricDistributionPointFunctionEnumSearch, input, cursor, endCursor );
}

