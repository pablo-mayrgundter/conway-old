
import { IfcBoundedSurface } from "./index"
import { IfcPlane } from "./index"
import { IfcCurve } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurveboundedplane.htm */
export  class IfcCurveBoundedPlane extends IfcBoundedSurface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCURVEBOUNDEDPLANE
  }
  private BasisSurface_? : IfcPlane
  private OuterBoundary_? : IfcCurve
  private InnerBoundaries_? : Array<IfcCurve>

  public get BasisSurface() : IfcPlane {
    if ( this.BasisSurface_ === void 0 ) {
      this.BasisSurface_ = this.extractElement( 0, false, IfcPlane )
    }

    return this.BasisSurface_ as IfcPlane
  }

  public get OuterBoundary() : IfcCurve {
    if ( this.OuterBoundary_ === void 0 ) {
      this.OuterBoundary_ = this.extractElement( 1, false, IfcCurve )
    }

    return this.OuterBoundary_ as IfcCurve
  }

  public get InnerBoundaries() : Array<IfcCurve> {
    if ( this.InnerBoundaries_ === void 0 ) {
      this.InnerBoundaries_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcCurve> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCurve ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.InnerBoundaries_ as Array<IfcCurve>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCURVEBOUNDEDPLANE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCURVEBOUNDEDPLANE
}
