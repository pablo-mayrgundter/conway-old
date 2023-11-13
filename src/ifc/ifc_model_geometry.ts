import { CanonicalMesh, CanonicalMeshType } from '../core/canonical_mesh'
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
   * Drop the mesh for a particular local ID
   *
   * @param localID The local ID of the item to delete.
   */
  public delete( localID: number ) {

    const value = this.meshes_.get( localID )

    if ( value !== void 0 ) {

      this.meshes_.delete( localID )

      if ( value.type === CanonicalMeshType.BUFFER_GEOMETRY ) {

        value.geometry.delete()
      }
    }
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
