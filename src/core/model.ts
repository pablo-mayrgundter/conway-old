import { CanonicalMesh } from './canonical_mesh'
import { Entity } from './entity'
import { IIndexSetCursor } from './i_index_set_cursor'

/**
 * Geometry capability, this model has geometry.
 */
export interface ModelGeometry extends Iterable< CanonicalMesh > {

  length: number

  getByLocalID(localID: number): CanonicalMesh | undefined

}

export interface Model extends Iterable<Entity> {

  getElementByLocalID(localID: number): Entity | undefined

  extract(from: Iterable<number>): IterableIterator<Entity>

  from(cursor: IIndexSetCursor, freeCursor: boolean): IterableIterator<Entity>

  readonly geometry?: ModelGeometry

  readonly size: number
}
