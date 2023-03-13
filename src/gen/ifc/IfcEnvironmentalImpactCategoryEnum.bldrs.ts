enum IfcEnvironmentalImpactCategoryEnum {
    COMBINEDVALUE = 0,
    DISPOSAL = 1,
    EXTRACTION = 2,
    INSTALLATION = 3,
    MANUFACTURE = 4,
    TRANSPORTATION = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcEnvironmentalImpactCategoryEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEnvironmentalImpactCategoryEnum = new Int32Array( [8,1,-7] );

let prefixSumAddressIfcEnvironmentalImpactCategoryEnum = new Uint32Array( [0,12,27,40,53,63,77,93,105] );

let slotMapIfcEnvironmentalImpactCategoryEnum = new Int32Array( [2,0,4,6,1,3,5,7] );

let encodedDataIfcEnvironmentalImpactCategoryEnum = (new TextEncoder()).encode( ".EXTRACTION..COMBINEDVALUE..MANUFACTURE..USERDEFINED..DISPOSAL..INSTALLATION..TRANSPORTATION..NOTDEFINED." );

let IfcEnvironmentalImpactCategoryEnumSearch = new MinimalPerfectHash< IfcEnvironmentalImpactCategoryEnum >( gMapIfcEnvironmentalImpactCategoryEnum, prefixSumAddressIfcEnvironmentalImpactCategoryEnum, slotMapIfcEnvironmentalImpactCategoryEnum, encodedDataIfcEnvironmentalImpactCategoryEnum );

export { IfcEnvironmentalImpactCategoryEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEnvironmentalImpactCategoryEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEnvironmentalImpactCategoryEnum | undefined
{
    return parser.extract< IfcEnvironmentalImpactCategoryEnum >( IfcEnvironmentalImpactCategoryEnumSearch, input, cursor, endCursor );
}

