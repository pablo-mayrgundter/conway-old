import { BlendMode, MaterialObject } from "../../dependencies/conway-geom/conway_geometry"

export type ColorRGBA = [number, number, number, number]

const ROUGNESS_CONVERSION_FACTOR = 2.0

/**
 * Convert a specular exponent (e.g. phong or blinn) to roughness
 * 
 * Uses the conversion from - http://simonstechblog.blogspot.com/2011/12/microfacet-brdf.html
 * @param shininess The shinyness exponent/𝛼 to convert to roughness
 * @return {number} The resultant roughness.
 */
export function exponentToRoughness( shininess: number ) : number {
  return Math.sqrt( ROUGNESS_CONVERSION_FACTOR /
    ( shininess + ROUGNESS_CONVERSION_FACTOR ) )
}

export interface CanonicalMaterial {

  readonly name: string

  readonly baseColor: ColorRGBA

  readonly metalness?: number

  /** Percentage of light reflected, will be factored by albedo */
  readonly roughness?: number

  readonly ior?: number

  readonly specular?: ColorRGBA

  readonly doubleSided: boolean

  readonly blend: BlendMode

  /* In future we may add support for more types here, but realistically
     we want to keep this implementable in gltf */
}
