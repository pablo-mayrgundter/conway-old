import StepEntityInternalReference from './step_entity_internal_reference'
import StepModelBase from './step_model_base'

/**
 * The base type for entities parsed from STEP.
 */
export default abstract class StepEntityBase<EntityTypeIDs extends number> {
  /**
   * Get the final type of this STEP entity.
   */
  public abstract get type(): EntityTypeIDs

  /**
   * Get the number of dimensions for this, some functions require every object to have this,
   *
   * The default value is 0.
   *
   * @return {number} The number of dimensions.
   */
  public get Dim(): number {
    return 0
  }

  /**
   * Get the express ID for this, note that if an element is inlined,
   * it will have not have an express ID.
   *
   * @return {number | undefined} The express ID of this or undefined if there isn't one.
   */
  public get expressID(): number | undefined {
    return this.internalReference_.expressID
  }

  /**
   * Is this an inline element or fully specified?
   *
   * @return {boolean} Is this inline?
   */
  public get isInline(): boolean {
    return this.expressID === void 0
  }

  /**
   * Convert this to a string (which is the equivalent to a reference or
   * '#inline' for inline elements).
   *
   * @return {string} Convert this to a string
   */
  public toString(): string {
    return `#${this.expressID ?? 'inline'}`
  }

  /**
   * Construct this with the local ID, internal reference and
   * the model.
   *
   * @param localID The local (dense) ID within the model, that acts as a reference.
   * @param internalReference_  The internal reference to model components etc.
   * @param model The model this came from.
   */
  /* eslint-disable no-useless-constructor, require-jsdoc, no-empty-function */
  /* Note that ES lint doesn't parse the typescript meaning of this constructor
   * correctly. */
  constructor(
    public readonly localID: number,
    protected readonly internalReference_: StepEntityInternalReference<EntityTypeIDs>,
    public readonly model: StepModelBase<EntityTypeIDs>) {}
  /* eslint-enable no-useless-constructor, require-jsdoc, no-empty-function */

  /**
   * Guarantees the VTable of this has been parsed from the model so that values can be read out.
   */
  protected guaranteeVTable(): void {
    if (this.internalReference_.vtableIndex === void 0) {
      const populated = this.model.populateVtableEntry(this.localID)

      if (!populated) {
        throw new Error('Entity does not have matching table entry to read from model')
      }
    }
  }
}
