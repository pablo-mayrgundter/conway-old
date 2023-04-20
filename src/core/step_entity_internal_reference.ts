import {StepIndexEntryBase} from '../../dependencies/conway-ds/src/parsing/step/step_parser'
import {IndexMark} from '../../dependencies/conway-ds/src/parsing/step/step_vtable_builder'
import StepEntityBase from './step_entity_base'

/**
 * Represents an internal reference with details to access
 * an object vtable, the buffer the object is in etc.
 */
export default interface StepEntityInternalReference< EntityTypeIDs extends number > extends
  StepIndexEntryBase< EntityTypeIDs >
{
    vtableIndex?: IndexMark;
    vtableCount?: number;
    buffer?: Uint8Array;
    vtable?: Uint32Array;
}

/**
 * Extended private version of the above that references the entity.
 */
export interface StepEntityInternalReferencePrivate<
  EntityTypeIDs extends number,
  BaseEntity extends StepEntityBase< EntityTypeIDs > > extends
  StepEntityInternalReference< EntityTypeIDs >
{
    entity?: BaseEntity;
}
