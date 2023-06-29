import { CanonicalMesh } from '../core/canonical_mesh'
import {ModelGeometry} from '../core/model'


/**
 *
 */
export class IfcModelGeometry implements ModelGeometry {

  private readonly meshes_ = new Map< number, CanonicalMesh >()

  /**
   * @return {number}
   */
  get length(): number {
    return this.meshes_.size
  }

  /**
   *
   * @param mesh
   */
  public add( mesh: CanonicalMesh ) {
    this.meshes_.set( mesh.localID, mesh )
  }

  /**
   *
   * @param localID
   * @return {CanonicalMesh | undefined}
   */
  public getByLocalID(localID: number): CanonicalMesh | undefined {
    return this.meshes_.get(localID)
  }

  /**
   *
   * @return {IterableIterator<CanonicalMesh>}
   */
  public [Symbol.iterator](): IterableIterator<CanonicalMesh> {
    return this.meshes_.values()
  }

}
