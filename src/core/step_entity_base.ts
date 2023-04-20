import { IndexMark } from '../../dependencies/conway-ds/src/parsing/step/step_vtable_builder'
import StepEntityInternalReference from './step_entity_internal_reference'
import StepModelBase from './step_model_base'


export default abstract class StepEntityBase<EntityTypeIDs extends number> {
  /**
   * Get the final type of this STEP entity.
   */
  public abstract get type(): EntityTypeIDs

  public get Dim(): number {
    return 0
  }

  /**
   * Get the express ID for this, note that if an element is inlined, it will have a
   */
  public get expressID(): number | undefined {
    return this.internalReference_.expressID
  }

  public get isInline(): boolean {
    return this.expressID === void 0
  }

  public toString(): string {
    return `#${this.expressID ?? 'Inline'}`
  }

  constructor(public readonly localID: number, protected readonly internalReference_: StepEntityInternalReference<EntityTypeIDs>, public readonly model: StepModelBase<EntityTypeIDs>) { }

  protected guaranteeVTable(): void {
    if (this.internalReference_.vtableIndex === void 0) {
      const populated = this.model.populateVtableEntry(this.localID)

      if (!populated) {
        throw new Error('Entity does not have matching table entry to read from model')
      }
    }
  }
}
