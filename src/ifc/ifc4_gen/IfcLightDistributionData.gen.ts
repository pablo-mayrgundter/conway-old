
import { IfcPlaneAngleMeasure } from "./index"
import { IfcLuminousIntensityDistributionMeasure } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclightdistributiondata.htm */
export  class IfcLightDistributionData extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCLIGHTDISTRIBUTIONDATA
  }
  private MainPlaneAngle_? : number
  private SecondaryPlaneAngle_? : Array< number >
  private LuminousIntensity_? : Array< number >

  public get MainPlaneAngle() : number {
    if ( this.MainPlaneAngle_ === void 0 ) {
      this.MainPlaneAngle_ = this.extractNumber( 0, false )
    }

    return this.MainPlaneAngle_ as number
  }

  public get SecondaryPlaneAngle() : Array< number > {
    if ( this.SecondaryPlaneAngle_ === void 0 ) {
      this.SecondaryPlaneAngle_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

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

    return this.SecondaryPlaneAngle_ as Array< number >
  }

  public get LuminousIntensity() : Array< number > {
    if ( this.LuminousIntensity_ === void 0 ) {
      this.LuminousIntensity_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

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

    return this.LuminousIntensity_ as Array< number >
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCLIGHTDISTRIBUTIONDATA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCLIGHTDISTRIBUTIONDATA
}
