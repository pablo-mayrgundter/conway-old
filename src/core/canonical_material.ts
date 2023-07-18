export type ColorRGBA = [number, number, number, number]

export enum SideFlags {

    NONE             = 0,
    POSITIVE_AREA    = 1,
    NEGATIVE_AREA    = 2,
}

export interface CanonicalMaterial {

    readonly name?: string

    readonly albedo?: ColorRGBA

    readonly metalness?: number

    readonly refactionIndex?: number

    readonly dispersionFactor?: number

    /** Percentage of light reflected, will be factored by albedo */
    readonly roughness?: number

    readonly transmission?: ColorRGBA

    
}