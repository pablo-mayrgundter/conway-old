import { CurveObject } from '../../dependencies/conway-geom/conway_geometry'
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
    nativeProfile:any | undefined //TODO(nickcastel50): create an interface for native types
}
