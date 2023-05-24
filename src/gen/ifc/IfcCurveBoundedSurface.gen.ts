
import { IfcBoundedSurface } from "./index"
import { IfcSurface } from "./index"
import { IfcBoundaryCurve } from "./index"
import { IfcBoolean } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurveboundedsurface.htm */
export  class IfcCurveBoundedSurface extends IfcBoundedSurface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCURVEBOUNDEDSURFACE
  }
  private BasisSurface_? : IfcSurface
  private Boundaries_? : Array<IfcBoundaryCurve>
  private ImplicitOuter_? : boolean

  public get BasisSurface() : IfcSurface {
    if ( this.BasisSurface_ === void 0 ) {
      this.BasisSurface_ = this.extractElement( 0, false, IfcSurface )
    }

    return this.BasisSurface_ as IfcSurface
  }

  public get Boundaries() : Array<IfcBoundaryCurve> {
    if ( this.Boundaries_ === void 0 ) {
      this.Boundaries_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcBoundaryCurve> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcBoundaryCurve ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Boundaries_ as Array<IfcBoundaryCurve>
  }

  public get ImplicitOuter() : boolean {
    if ( this.ImplicitOuter_ === void 0 ) {
      this.ImplicitOuter_ = this.extractBoolean( 2, false )
    }

    return this.ImplicitOuter_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCURVEBOUNDEDSURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCURVEBOUNDEDSURFACE
}
