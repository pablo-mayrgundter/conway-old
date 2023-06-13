import { Entity } from './entity'
import { IIndexSetCursor } from './i_index_set_cursor'


export interface Model extends Iterable<Entity> {

  getElementByLocalID(localID: number): Entity | undefined

  extract(from: Iterable<number>): IterableIterator<Entity>

  from(cursor: IIndexSetCursor, freeCursor: boolean): IterableIterator<Entity>

  readonly size: number
}
