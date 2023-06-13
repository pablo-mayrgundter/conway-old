
import { IfcBSplineCurve } from "./index"
import { IfcInteger } from "./index"
import { IfcParameterValue } from "./index"
import { IfcKnotType, IfcKnotTypeDeserializeStep } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
  SIZEOF,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbsplinecurvewithknots.htm */
export  class IfcBSplineCurveWithKnots extends IfcBSplineCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS
  }
  private KnotMultiplicities_? : Array< number >
  private Knots_? : Array< number >
  private KnotSpec_? : IfcKnotType

  public get KnotMultiplicities() : Array< number > {
    if ( this.KnotMultiplicities_ === void 0 ) {
      this.KnotMultiplicities_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.KnotMultiplicities_ as Array< number >
  }

  public get Knots() : Array< number > {
    if ( this.Knots_ === void 0 ) {
      this.Knots_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.Knots_ as Array< number >
  }

  public get KnotSpec() : IfcKnotType {
    if ( this.KnotSpec_ === void 0 ) {
      this.KnotSpec_ = this.extractLambda( 7, IfcKnotTypeDeserializeStep, false )
    }

    return this.KnotSpec_ as IfcKnotType
  }

  public get UpperIndexOnKnots() : number {
    return SIZEOF(this?.Knots);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS, EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS
}
