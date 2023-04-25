/* This is generated code, don't alter */
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
  COMMISSIONINGENGINEER = 15,
  ENGINEER = 16,
  OWNER = 17,
  CONSULTANT = 18,
  CONSTRUCTIONMANAGER = 19,
  FIELDCONSTRUCTIONMANAGER = 20,
  RESELLER = 21,
  USERDEFINED = 22,
}

const IfcRoleEnumCount = 23

export { IfcRoleEnum, IfcRoleEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcRoleEnum =
  new Int32Array( [32,1,81,8,34,483] )

let prefixSumAddressIfcRoleEnum =
  new Uint32Array( [0,15,26,42,63,76,96,122,137,145,155,175,189,203,223,233,251,274,281,296,306,318,330,349] )

let slotMapIfcRoleEnum =
  new Int32Array( [8,4,12,19,22,10,20,14,7,0,11,6,1,5,16,9,15,17,3,21,18,2,13] )

let encodedDataIfcRoleEnum =
  (new TextEncoder()).encode( ".BUILDINGOWNER..ARCHITECT..PROJECTMANAGER..CONSTRUCTIONMANAGER..USERDEFINED..MECHANICALENGINEER..FIELDCONSTRUCTIONMANAGER..CIVILENGINEER..CLIENT..SUPPLIER..ELECTRICALENGINEER..COSTENGINEER..MANUFACTURER..STRUCTURALENGINEER..ENGINEER..BUILDINGOPERATOR..COMMISSIONINGENGINEER..OWNER..SUBCONTRACTOR..RESELLER..CONSULTANT..CONTRACTOR..FACILITIESMANAGER." )

let IfcRoleEnumSearch =
  new MinimalPerfectHash< IfcRoleEnum >( gMapIfcRoleEnum, prefixSumAddressIfcRoleEnum, slotMapIfcRoleEnum, encodedDataIfcRoleEnum )

export { IfcRoleEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcRoleEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcRoleEnum | undefined {
  return parser.extract< IfcRoleEnum >( IfcRoleEnumSearch, input, cursor, endCursor )
}
