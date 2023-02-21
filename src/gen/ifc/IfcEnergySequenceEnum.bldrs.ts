enum IfcEnergySequenceEnum {
    PRIMARY = 0,
    SECONDARY = 1,
    TERTIARY = 2,
    AUXILIARY = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export default IfcEnergySequenceEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEnergySequenceEnum = new Int32Array( [88] );

let prefixSumAddressIfcEnergySequenceEnum = new Uint32Array( [0,11,23,36,47,57,66] );

let slotMapIfcEnergySequenceEnum = new Int32Array( [1,5,4,3,2,0] );

let encodedDataIfcEnergySequenceEnum = (new TextEncoder()).encode( ".SECONDARY..NOTDEFINED..USERDEFINED..AUXILIARY..TERTIARY..PRIMARY." );

let IfcEnergySequenceEnumSearch = new MinimalPerfectHash< IfcEnergySequenceEnum >( gMapIfcEnergySequenceEnum, prefixSumAddressIfcEnergySequenceEnum, slotMapIfcEnergySequenceEnum, encodedDataIfcEnergySequenceEnum );

export { IfcEnergySequenceEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEnergySequenceEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEnergySequenceEnum | undefined
{
    return parser.parse< IfcEnergySequenceEnum >( IfcEnergySequenceEnumSearch, input, cursor, endCursor );
}

