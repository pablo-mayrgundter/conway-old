enum IfcServiceLifeTypeEnum {
    ACTUALSERVICELIFE = 0,
    EXPECTEDSERVICELIFE = 1,
    OPTIMISTICREFERENCESERVICELIFE = 2,
    PESSIMISTICREFERENCESERVICELIFE = 3,
    REFERENCESERVICELIFE = 4,
}
export { IfcServiceLifeTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcServiceLifeTypeEnum = new Int32Array( [6] );

let prefixSumAddressIfcServiceLifeTypeEnum = new Uint32Array( [0,21,53,72,105,127] );

let slotMapIfcServiceLifeTypeEnum = new Int32Array( [1,2,0,3,4] );

let encodedDataIfcServiceLifeTypeEnum = (new TextEncoder()).encode( ".EXPECTEDSERVICELIFE..OPTIMISTICREFERENCESERVICELIFE..ACTUALSERVICELIFE..PESSIMISTICREFERENCESERVICELIFE..REFERENCESERVICELIFE." );

let IfcServiceLifeTypeEnumSearch = new MinimalPerfectHash< IfcServiceLifeTypeEnum >( gMapIfcServiceLifeTypeEnum, prefixSumAddressIfcServiceLifeTypeEnum, slotMapIfcServiceLifeTypeEnum, encodedDataIfcServiceLifeTypeEnum );

export { IfcServiceLifeTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcServiceLifeTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcServiceLifeTypeEnum | undefined
{
    return parser.extract< IfcServiceLifeTypeEnum >( IfcServiceLifeTypeEnumSearch, input, cursor, endCursor );
}

