enum IfcReflectanceMethodEnum {
    BLINN = 0,
    FLAT = 1,
    GLASS = 2,
    MATT = 3,
    METAL = 4,
    MIRROR = 5,
    PHONG = 6,
    PLASTIC = 7,
    STRAUSS = 8,
    NOTDEFINED = 9,
}
export default IfcReflectanceMethodEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcReflectanceMethodEnum = new Int32Array( [46,10,1] );

let prefixSumAddressIfcReflectanceMethodEnum = new Uint32Array( [0,7,19,25,34,42,51,58,64,71,78] );

let slotMapIfcReflectanceMethodEnum = new Int32Array( [6,9,3,7,5,8,0,1,2,4] );

let encodedDataIfcReflectanceMethodEnum = (new TextEncoder()).encode( ".PHONG..NOTDEFINED..MATT..PLASTIC..MIRROR..STRAUSS..BLINN..FLAT..GLASS..METAL." );

let IfcReflectanceMethodEnumSearch = new MinimalPerfectHash< IfcReflectanceMethodEnum >( gMapIfcReflectanceMethodEnum, prefixSumAddressIfcReflectanceMethodEnum, slotMapIfcReflectanceMethodEnum, encodedDataIfcReflectanceMethodEnum );

export { IfcReflectanceMethodEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcReflectanceMethodEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcReflectanceMethodEnum | undefined
{
    return parser.extract< IfcReflectanceMethodEnum >( IfcReflectanceMethodEnumSearch, input, cursor, endCursor );
}

