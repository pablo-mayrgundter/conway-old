import {
  BlendMode,
} from '../../dependencies/conway-geom/conway_geometry'


export type ColorRGBA = [number, number, number, number]

const ROUGNESS_CONVERSION_FACTOR = 2.0

/**
 * Convert a specular exponent (e.g. phong or blinn) to roughness
 *
 * Uses the conversion from - http://simonstechblog.blogspot.com/2011/12/microfacet-brdf.html
 *
 * @param shininess The shinyness exponent/𝛼 to convert to roughness
 * @return {number} The resultant roughness.
 */
export function exponentToRoughness( shininess: number ) : number {
  return Math.sqrt( ROUGNESS_CONVERSION_FACTOR /
    ( shininess + ROUGNESS_CONVERSION_FACTOR ) )
}

/**
 * A canonical material represents the internal material type we pass
 * around and support wiring up to gltf like properties.
 */
export interface CanonicalMaterial {

  /**
   * The name of this material, which may be procedurally generated.
   */
  readonly name: string

  /**
   * The base color of this material (in PBR terms)
   */
  readonly baseColor: ColorRGBA

  /**
   * How metallic is this surface? 0 for dialletric, 1 for metal.
   */
  readonly metalness?: number

  /**
   * How rough is this surface vs how shiny (1 for maximum rougness, 0 for full specular)
   */
  readonly roughness?: number

  /**
   * The index of refraction of this surface.
   */
  readonly ior?: number

  /**
   * The specular color of this surface (F0, overrides the F0 that would
   * be produced by baseColor, metalness and index of refraction).
   */
  readonly specular?: ColorRGBA

  /**
   * Is this material double sided or is it back face culled?
   */
  readonly doubleSided: boolean

  /**
   * The blend mode for this surface (should probably be opaque).
   */
  readonly blend: BlendMode

  /* In future we may add support for more types here, but realistically
     we want to keep this implementable in gltf */
}
