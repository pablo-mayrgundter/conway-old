import { CurveObject } from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMesh } from './canonical_mesh'
import {CanonicalProfile} from './canonical_profile'
import { Entity } from './entity'
import { IIndexSetCursor } from './i_index_set_cursor'

/**
 * Geometry capability, this model has geometry.
 */
export interface ModelGeometry extends Iterable< CanonicalMesh > {

  length: number

  getByLocalID(localID: number): CanonicalMesh | undefined

}

/**
 * Geometry capability, this model has profiles.
 */
export interface ModelProfile extends Iterable< CanonicalProfile > {

  length: number

  getByLocalID(localID: number): CanonicalProfile | undefined

}

export interface Model extends Iterable<Entity> {

  getElementByLocalID(localID: number): Entity | undefined

  extract(from: Iterable<number>): IterableIterator<Entity>

  from(cursor: IIndexSetCursor, freeCursor: boolean): IterableIterator<Entity>

  readonly geometry?: ModelGeometry

  readonly size: number
}
