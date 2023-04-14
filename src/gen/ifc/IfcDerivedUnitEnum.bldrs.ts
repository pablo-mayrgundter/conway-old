enum IfcDerivedUnitEnum {
    ANGULARVELOCITYUNIT = 0,
    AREADENSITYUNIT = 1,
    COMPOUNDPLANEANGLEUNIT = 2,
    DYNAMICVISCOSITYUNIT = 3,
    HEATFLUXDENSITYUNIT = 4,
    INTEGERCOUNTRATEUNIT = 5,
    ISOTHERMALMOISTURECAPACITYUNIT = 6,
    KINEMATICVISCOSITYUNIT = 7,
    LINEARVELOCITYUNIT = 8,
    MASSDENSITYUNIT = 9,
    MASSFLOWRATEUNIT = 10,
    MOISTUREDIFFUSIVITYUNIT = 11,
    MOLECULARWEIGHTUNIT = 12,
    SPECIFICHEATCAPACITYUNIT = 13,
    THERMALADMITTANCEUNIT = 14,
    THERMALCONDUCTANCEUNIT = 15,
    THERMALRESISTANCEUNIT = 16,
    THERMALTRANSMITTANCEUNIT = 17,
    VAPORPERMEABILITYUNIT = 18,
    VOLUMETRICFLOWRATEUNIT = 19,
    ROTATIONALFREQUENCYUNIT = 20,
    TORQUEUNIT = 21,
    MOMENTOFINERTIAUNIT = 22,
    LINEARMOMENTUNIT = 23,
    LINEARFORCEUNIT = 24,
    PLANARFORCEUNIT = 25,
    MODULUSOFELASTICITYUNIT = 26,
    SHEARMODULUSUNIT = 27,
    LINEARSTIFFNESSUNIT = 28,
    ROTATIONALSTIFFNESSUNIT = 29,
    MODULUSOFSUBGRADEREACTIONUNIT = 30,
    ACCELERATIONUNIT = 31,
    CURVATUREUNIT = 32,
    HEATINGVALUEUNIT = 33,
    IONCONCENTRATIONUNIT = 34,
    LUMINOUSINTENSITYDISTRIBUTIONUNIT = 35,
    MASSPERLENGTHUNIT = 36,
    MODULUSOFLINEARSUBGRADEREACTIONUNIT = 37,
    MODULUSOFROTATIONALSUBGRADEREACTIONUNIT = 38,
    PHUNIT = 39,
    ROTATIONALMASSUNIT = 40,
    SECTIONAREAINTEGRALUNIT = 41,
    SECTIONMODULUSUNIT = 42,
    SOUNDPOWERLEVELUNIT = 43,
    SOUNDPOWERUNIT = 44,
    SOUNDPRESSURELEVELUNIT = 45,
    SOUNDPRESSUREUNIT = 46,
    TEMPERATUREGRADIENTUNIT = 47,
    TEMPERATURERATEOFCHANGEUNIT = 48,
    THERMALEXPANSIONCOEFFICIENTUNIT = 49,
    WARPINGCONSTANTUNIT = 50,
    WARPINGMOMENTUNIT = 51,
    USERDEFINED = 52,
}
const IfcDerivedUnitEnumCount = 53;

export { IfcDerivedUnitEnum, IfcDerivedUnitEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcDerivedUnitEnum = new Int32Array( [7,27,217,96,2,336,1,-19,-34,323,629,43,5] );

let prefixSumAddressIfcDerivedUnitEnum = new Uint32Array( [0,25,44,66,84,109,130,148,172,201,222,239,261,283,307,338,357,382,394,417,438,459,483,501,514,537,560,585,604,621,645,671,696,716,733,748,789,814,832,869,902,918,935,970,1002,1023,1043,1063,1084,1110,1134,1155,1163,1181] );

let slotMapIfcDerivedUnitEnum = new Int32Array( [41,46,34,23,29,43,27,19,48,12,9,3,5,2,30,51,47,21,18,22,28,45,33,52,14,16,26,36,25,7,17,20,8,1,32,38,11,31,37,49,44,24,35,6,4,40,42,50,13,15,0,39,10] );

let encodedDataIfcDerivedUnitEnum = (new TextEncoder()).encode( ".SECTIONAREAINTEGRALUNIT..SOUNDPRESSUREUNIT..IONCONCENTRATIONUNIT..LINEARMOMENTUNIT..ROTATIONALSTIFFNESSUNIT..SOUNDPOWERLEVELUNIT..SHEARMODULUSUNIT..VOLUMETRICFLOWRATEUNIT..TEMPERATURERATEOFCHANGEUNIT..MOLECULARWEIGHTUNIT..MASSDENSITYUNIT..DYNAMICVISCOSITYUNIT..INTEGERCOUNTRATEUNIT..COMPOUNDPLANEANGLEUNIT..MODULUSOFSUBGRADEREACTIONUNIT..WARPINGMOMENTUNIT..TEMPERATUREGRADIENTUNIT..TORQUEUNIT..VAPORPERMEABILITYUNIT..MOMENTOFINERTIAUNIT..LINEARSTIFFNESSUNIT..SOUNDPRESSURELEVELUNIT..HEATINGVALUEUNIT..USERDEFINED..THERMALADMITTANCEUNIT..THERMALRESISTANCEUNIT..MODULUSOFELASTICITYUNIT..MASSPERLENGTHUNIT..PLANARFORCEUNIT..KINEMATICVISCOSITYUNIT..THERMALTRANSMITTANCEUNIT..ROTATIONALFREQUENCYUNIT..LINEARVELOCITYUNIT..AREADENSITYUNIT..CURVATUREUNIT..MODULUSOFROTATIONALSUBGRADEREACTIONUNIT..MOISTUREDIFFUSIVITYUNIT..ACCELERATIONUNIT..MODULUSOFLINEARSUBGRADEREACTIONUNIT..THERMALEXPANSIONCOEFFICIENTUNIT..SOUNDPOWERUNIT..LINEARFORCEUNIT..LUMINOUSINTENSITYDISTRIBUTIONUNIT..ISOTHERMALMOISTURECAPACITYUNIT..HEATFLUXDENSITYUNIT..ROTATIONALMASSUNIT..SECTIONMODULUSUNIT..WARPINGCONSTANTUNIT..SPECIFICHEATCAPACITYUNIT..THERMALCONDUCTANCEUNIT..ANGULARVELOCITYUNIT..PHUNIT..MASSFLOWRATEUNIT." );

let IfcDerivedUnitEnumSearch = new MinimalPerfectHash< IfcDerivedUnitEnum >( gMapIfcDerivedUnitEnum, prefixSumAddressIfcDerivedUnitEnum, slotMapIfcDerivedUnitEnum, encodedDataIfcDerivedUnitEnum );

export { IfcDerivedUnitEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcDerivedUnitEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcDerivedUnitEnum | undefined
{
    return parser.extract< IfcDerivedUnitEnum >( IfcDerivedUnitEnumSearch, input, cursor, endCursor );
}
