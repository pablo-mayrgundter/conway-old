import { CurveObject, ProfileObject } from '../../dependencies/conway-geom/conway_geometry'

/**
 * Represents a profile as cached canonically for extrusion/sweeps
 */
export interface CanonicalProfile {
    localID: number
    curve: CurveObject | undefined
    holes:CurveObject[] | undefined
    // TODO(nickcastel50): IfcJS has an isConvex variable, appears unused
    // isConvex:boolean
    profiles: CanonicalProfile[] | undefined
    nativeProfile:ProfileObject | undefined
}
