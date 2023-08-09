import { IIndexSetCursor } from '../core/i_index_set_cursor'
import DynamicSingleIndexSet, {
  ELEMENT_SIZE,
  MAX_NODE_STACK,
  NODE_ELEMENT_SHIFT,
  NODE_MASK,
} from './dynamic_single_index_set'
import IndexSetConstants from './index_set_constants'


const MASK_BOTTOMBITS = IndexSetConstants.MASK_BOTTOMBITS
const MASK_TOPBITS    = IndexSetConstants.MASK_TOPBITS

const pool: DynamicSingleIndexSetCursor[] = []

/**
 * Cursor to a dynamic single index set span for queries.
 */
export class DynamicSingleIndexSetCursor implements IIndexSetCursor {

  private set_?: DynamicSingleIndexSet
  private cursorStack_: Uint32Array = new Uint32Array(MAX_NODE_STACK)
  private version_: number = 0

  private high_: number = 0
  private low_: number = 0

  /* eslint-disable no-useless-constructor, no-empty-function */
  /**
   * Construct this, not accessible.
   */
  private constructor() {}
  /* eslint-enable no-useless-constructor, no-empty-function */

  /**
   * Get the current high 27 bits, as a regular number with the lower 5 bits
   * padded to zero.
   *
   * @return {number} The high bits.
   */
  public get high(): number {
    return this.high_
  }

  /**
   * Get a set of up to 32 low bits, in one-hot format or'd together,
   * so that each bit index represents a 5 bit bottom part corresponding to the top 27
   *
   * @return {number} The high bits.
   */
  public get low(): number {
    return this.low_
  }

  /**
   * Step this cursor to the next high (and matching set of lows)
   *
   * @return {boolean} True if this is not at the end of the sequence,
   * false otherwise.
   */
  public step(): boolean {

    if ( this.set_ === void 0 ) {
      return false
    }

    const localSet = this.set_

    if ( localSet.version !== this.version_ ) {

      // Invalidation case - maybe we should error flag here - CS
      delete this.set_
      return false
    }

    const data = localSet.buffer
    const stack = this.cursorStack_
    const depth = localSet.depth

    let stackIndex = depth - 1

    const currentAddress = stack[ stackIndex ]

    // read current values
    this.high_ = data[ currentAddress ] & MASK_TOPBITS
    this.low_  = data[ currentAddress + 1 ] & MASK_BOTTOMBITS

    let advancing = true

    // now advance the cursor stack
    while ( stackIndex >= 0 ) {

      const stackAddress     = stack[ stackIndex ]
      const stackNodeAddress = stackAddress & NODE_MASK
      const nodeSize         = data[ currentAddress ] & MASK_BOTTOMBITS
      const endAddress       = stackNodeAddress + ( nodeSize * ELEMENT_SIZE )

      // The next address will only be moved forwards
      // if we are still at the advancing stage of the traversal
      const nextAddress = stackAddress + ( advancing ? ELEMENT_SIZE : 0 )

      // If the current node is at or past (past shouldn't happen, but we're defensive)
      // its end, go up the stack to the next shallower node
      if ( nextAddress >= endAddress ) {

        --stackIndex
        continue
      }

      // We no longer need to go forwards, we've advanced to a new node front
      // so now go deeper in the tree til we hit a leaf, by
      // traversing back down

      stack[ stackIndex ] = nextAddress

      ++stackIndex

      if ( stackIndex === depth ) {

        return true
      }

      advancing = false
      stack[ stackIndex ] = data[ nextAddress + 1 ] << NODE_ELEMENT_SHIFT
    }

    // here we got all the way to the end of the root, and ran
    // out of nodess.
    delete this.set_

    return true
  }

  /**
   * Allocate a DynamicSingleIndexSetCursor, re-using freed ones in the pool.
   *
   * @param set The set to construct the cursor from.
   * @return {DynamicSingleIndexSetCursor} The allocated cursor.
   */
  public static allocate( set: DynamicSingleIndexSet ): DynamicSingleIndexSetCursor {

    let result: DynamicSingleIndexSetCursor

    if ( pool.length > 0 ) {
      result = pool.pop() as DynamicSingleIndexSetCursor
    } else {
      result = new DynamicSingleIndexSetCursor()
    }

    const root = set.root

    if ( root === void 0 ) {

      delete result.set_
      return result
    }

    const data = set.buffer

    result.set_     = set
    result.version_ = set.version

    const depth        = set.depth
    let   stackIndex   = 0
    let   currentNode  = root
    const stack        = result.cursorStack_

    // Find the left most leaf start.
    for (;;) {

      const currentAddress = currentNode << NODE_ELEMENT_SHIFT

      stack[ stackIndex++ ] = currentAddress

      if ( stackIndex === depth ) {
        break
      }

      currentNode = data[ currentAddress + 1 ]
    }

    return result
  }

  /**
   * Free this cursor back to the pool.
   */
  public free(): void {
    delete this.set_
    pool.push( this )
  }
}
