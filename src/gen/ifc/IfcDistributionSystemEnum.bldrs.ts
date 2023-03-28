enum IfcDistributionSystemEnum {
    AIRCONDITIONING = 0,
    AUDIOVISUAL = 1,
    CHEMICAL = 2,
    CHILLEDWATER = 3,
    COMMUNICATION = 4,
    COMPRESSEDAIR = 5,
    CONDENSERWATER = 6,
    CONTROL = 7,
    CONVEYING = 8,
    DATA = 9,
    DISPOSAL = 10,
    DOMESTICCOLDWATER = 11,
    DOMESTICHOTWATER = 12,
    DRAINAGE = 13,
    EARTHING = 14,
    ELECTRICAL = 15,
    ELECTROACOUSTIC = 16,
    EXHAUST = 17,
    FIREPROTECTION = 18,
    FUEL = 19,
    GAS = 20,
    HAZARDOUS = 21,
    HEATING = 22,
    LIGHTING = 23,
    LIGHTNINGPROTECTION = 24,
    MUNICIPALSOLIDWASTE = 25,
    OIL = 26,
    OPERATIONAL = 27,
    POWERGENERATION = 28,
    RAINWATER = 29,
    REFRIGERATION = 30,
    SECURITY = 31,
    SEWAGE = 32,
    SIGNAL = 33,
    STORMWATER = 34,
    TELEPHONE = 35,
    TV = 36,
    VACUUM = 37,
    VENT = 38,
    VENTILATION = 39,
    WASTEWATER = 40,
    WATERSUPPLY = 41,
    USERDEFINED = 42,
    NOTDEFINED = 43,
}
export { IfcDistributionSystemEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDistributionSystemEnum = new Int32Array( [31,5,59,324,1,8,-7,372,1,3,102] );

let prefixSumAddressIfcDistributionSystemEnum = new Uint32Array( [0,11,19,34,51,63,84,94,111,130,143,156,165,171,180,192,204,220,230,244,255,273,281,294,311,322,333,338,353,359,369,373,379,389,399,404,412,424,437,447,468,481,490,506,521] );

let slotMapIfcDistributionSystemEnum = new Int32Array( [21,37,5,16,34,24,13,28,11,39,41,17,19,7,43,40,18,23,3,35,12,33,27,0,8,29,26,30,38,10,36,9,14,31,20,32,15,42,2,25,1,22,6,4] );

let encodedDataIfcDistributionSystemEnum = (new TextEncoder()).encode( ".HAZARDOUS..VACUUM..COMPRESSEDAIR..ELECTROACOUSTIC..STORMWATER..LIGHTNINGPROTECTION..DRAINAGE..POWERGENERATION..DOMESTICCOLDWATER..VENTILATION..WATERSUPPLY..EXHAUST..FUEL..CONTROL..NOTDEFINED..WASTEWATER..FIREPROTECTION..LIGHTING..CHILLEDWATER..TELEPHONE..DOMESTICHOTWATER..SIGNAL..OPERATIONAL..AIRCONDITIONING..CONVEYING..RAINWATER..OIL..REFRIGERATION..VENT..DISPOSAL..TV..DATA..EARTHING..SECURITY..GAS..SEWAGE..ELECTRICAL..USERDEFINED..CHEMICAL..MUNICIPALSOLIDWASTE..AUDIOVISUAL..HEATING..CONDENSERWATER..COMMUNICATION." );

let IfcDistributionSystemEnumSearch = new MinimalPerfectHash< IfcDistributionSystemEnum >( gMapIfcDistributionSystemEnum, prefixSumAddressIfcDistributionSystemEnum, slotMapIfcDistributionSystemEnum, encodedDataIfcDistributionSystemEnum );

export { IfcDistributionSystemEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDistributionSystemEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDistributionSystemEnum | undefined
{
    return parser.extract< IfcDistributionSystemEnum >( IfcDistributionSystemEnumSearch, input, cursor, endCursor );
}
