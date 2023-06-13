
import { IfcArbitraryClosedProfileDef } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcarbitraryprofiledefwithvoids.htm */
export  class IfcArbitraryProfileDefWithVoids extends IfcArbitraryClosedProfileDef {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCARBITRARYPROFILEDEFWITHVOIDS
  }
  private InnerCurves_? : Array<IfcCurve>

  public get InnerCurves() : Array<IfcCurve> {
    if ( this.InnerCurves_ === void 0 ) {
      this.InnerCurves_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

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

    return this.InnerCurves_ as Array<IfcCurve>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCARBITRARYPROFILEDEFWITHVOIDS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCARBITRARYPROFILEDEFWITHVOIDS
}
