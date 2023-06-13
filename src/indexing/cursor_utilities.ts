import { pop32 } from './bit_operations'
import { IIndexSetCursor } from '../core/i_index_set_cursor'


/**
 * Count the number of set items in a cursor.
 *
 * @param cursor The cursor to count the items in.
 * @return {number} The count of items in the cursor set.
 */
export function cursorCount( cursor: IIndexSetCursor ): number {
  let result = 0

  while ( cursor.step() ) {
    result += pop32( cursor.low )
  }

  return result
}
