enum IfcRoleEnum {
    SUPPLIER = 0,
    MANUFACTURER = 1,
    CONTRACTOR = 2,
    SUBCONTRACTOR = 3,
    ARCHITECT = 4,
    STRUCTURALENGINEER = 5,
    COSTENGINEER = 6,
    CLIENT = 7,
    BUILDINGOWNER = 8,
    BUILDINGOPERATOR = 9,
    MECHANICALENGINEER = 10,
    ELECTRICALENGINEER = 11,
    PROJECTMANAGER = 12,
    FACILITIESMANAGER = 13,
    CIVILENGINEER = 14,
    COMISSIONINGENGINEER = 15,
    ENGINEER = 16,
    OWNER = 17,
    CONSULTANT = 18,
    CONSTRUCTIONMANAGER = 19,
    FIELDCONSTRUCTIONMANAGER = 20,
    RESELLER = 21,
    USERDEFINED = 22,
}
export { IfcRoleEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcRoleEnum = new Int32Array( [3,1,68,17,57,30] );

let prefixSumAddressIfcRoleEnum = new Uint32Array( [0,15,30,43,64,80,100,118,133,144,164,174,188,196,218,230,240,247,261,281,291,303,329,348] );

let slotMapIfcRoleEnum = new Int32Array( [8,3,22,19,12,10,9,14,4,5,0,6,7,15,18,16,17,1,11,21,2,20,13] );

let encodedDataIfcRoleEnum = (new TextEncoder()).encode( ".BUILDINGOWNER..SUBCONTRACTOR..USERDEFINED..CONSTRUCTIONMANAGER..PROJECTMANAGER..MECHANICALENGINEER..BUILDINGOPERATOR..CIVILENGINEER..ARCHITECT..STRUCTURALENGINEER..SUPPLIER..COSTENGINEER..CLIENT..COMISSIONINGENGINEER..CONSULTANT..ENGINEER..OWNER..MANUFACTURER..ELECTRICALENGINEER..RESELLER..CONTRACTOR..FIELDCONSTRUCTIONMANAGER..FACILITIESMANAGER." );

let IfcRoleEnumSearch = new MinimalPerfectHash< IfcRoleEnum >( gMapIfcRoleEnum, prefixSumAddressIfcRoleEnum, slotMapIfcRoleEnum, encodedDataIfcRoleEnum );

export { IfcRoleEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcRoleEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcRoleEnum | undefined
{
    return parser.extract< IfcRoleEnum >( IfcRoleEnumSearch, input, cursor, endCursor );
}

