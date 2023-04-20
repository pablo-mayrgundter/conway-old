import {StepIndexEntry, StepIndexEntryBase} from '../../dependencies/conway-ds/src/parsing/step/step_parser'
import StepVtableBuilder, {IndexMark} from '../../dependencies/conway-ds/src/parsing/step/step_vtable_builder'
import StepEntityBase from './step_entity_base'


export default interface StepEntityInternalReference< EntityTypeIDs extends number > extends StepIndexEntryBase< EntityTypeIDs >
{
    vtableIndex?: IndexMark;
    vtableCount?: number;
    buffer?: Uint8Array;
    vtable?: Uint32Array;
}

export interface StepEntityInternalReferencePrivate< EntityTypeIDs extends number, BaseEntity extends StepEntityBase< EntityTypeIDs > > extends StepEntityInternalReference< EntityTypeIDs >
{
    entity?: BaseEntity;
}
