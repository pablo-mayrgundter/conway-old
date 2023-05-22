
import { IfcBSplineSurface } from "./index"
import { IfcInteger } from "./index"
import { IfcParameterValue } from "./index"
import { IfcKnotType, IfcKnotTypeDeserializeStep } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
  SIZEOF,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbsplinesurfacewithknots.htm */
export  class IfcBSplineSurfaceWithKnots extends IfcBSplineSurface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBSPLINESURFACEWITHKNOTS
  }
  private UMultiplicities_? : Array< number >
  private VMultiplicities_? : Array< number >
  private UKnots_? : Array< number >
  private VKnots_? : Array< number >
  private KnotSpec_? : IfcKnotType

  public get UMultiplicities() : Array< number > {
    if ( this.UMultiplicities_ === void 0 ) {
      this.UMultiplicities_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

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

    return this.UMultiplicities_ as Array< number >
  }

  public get VMultiplicities() : Array< number > {
    if ( this.VMultiplicities_ === void 0 ) {
      this.VMultiplicities_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

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

    return this.VMultiplicities_ as Array< number >
  }

  public get UKnots() : Array< number > {
    if ( this.UKnots_ === void 0 ) {
      this.UKnots_ = this.extractLambda( 9, (buffer, cursor, endCursor) => {

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

    return this.UKnots_ as Array< number >
  }

  public get VKnots() : Array< number > {
    if ( this.VKnots_ === void 0 ) {
      this.VKnots_ = this.extractLambda( 10, (buffer, cursor, endCursor) => {

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

    return this.VKnots_ as Array< number >
  }

  public get KnotSpec() : IfcKnotType {
    if ( this.KnotSpec_ === void 0 ) {
      this.KnotSpec_ = this.extractLambda( 11, IfcKnotTypeDeserializeStep, false )
    }

    return this.KnotSpec_ as IfcKnotType
  }

  public get KnotVUpper() : number {
    return SIZEOF(this?.VKnots);
  }

  public get KnotUUpper() : number {
    return SIZEOF(this?.UKnots);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBSPLINESURFACEWITHKNOTS, EntityTypesIfc.IFCRATIONALBSPLINESURFACEWITHKNOTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBSPLINESURFACEWITHKNOTS
}
