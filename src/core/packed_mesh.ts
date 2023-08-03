import { GeometryObject } from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMaterial } from './canonical_material'
import { Model } from './model'
import { TriangleElementMap } from './triangle_element_map'


export interface PackedMesh< ModelType extends Model > {

  model: ModelType

  /**
   * Materials for this packed mesh, accessed by primitives.
   */
  materials: ReadonlyArray< CanonicalMaterial >

  /**
   * The mesh primitives for this mesh.
   */
  primitives: ReadonlyArray< GeometryObject >

  /**
   * Triangle element maps (one per mesh primitive)
   */
  readonly triangleElementMaps: ReadonlyArray< TriangleElementMap >
}
