import { CurveObject, ProfileObject } from '../../dependencies/conway-geom/conway_geometry'
import { Model } from './model'

/**
 * 
 */
export interface CanonicalProfile {
    localID: number
    curve: CurveObject | undefined
    holes:CurveObject[] | undefined
    //TODO(nickcastel50): IfcJS has an isConvex variable, appears unused
    //isConvex:boolean
    profiles: CanonicalProfile[] | undefined
    nativeProfile:ProfileObject | undefined 
}
