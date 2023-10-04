
import { IfcStructuralLoadOrResult } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcRatioMeasure } from "./index"
import {
  stepExtractOptional,
  stepExtractNumber,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacereinforcementarea.htm */
export  class IfcSurfaceReinforcementArea extends IfcStructuralLoadOrResult {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSURFACEREINFORCEMENTAREA
  }
  private SurfaceReinforcement1_? : Array< number > | null
  private SurfaceReinforcement2_? : Array< number > | null
  private ShearReinforcement_? : number | null

  public get SurfaceReinforcement1() : Array< number > | null {
    if ( this.SurfaceReinforcement1_ === void 0 ) {
      this.SurfaceReinforcement1_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

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
      return value }, true )
    }

    return this.SurfaceReinforcement1_ as Array< number > | null
  }

  public get SurfaceReinforcement2() : Array< number > | null {
    if ( this.SurfaceReinforcement2_ === void 0 ) {
      this.SurfaceReinforcement2_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

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
      return value }, true )
    }

    return this.SurfaceReinforcement2_ as Array< number > | null
  }

  public get ShearReinforcement() : number | null {
    if ( this.ShearReinforcement_ === void 0 ) {
      this.ShearReinforcement_ = this.extractNumber( 3, true )
    }

    return this.ShearReinforcement_ as number | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSURFACEREINFORCEMENTAREA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSURFACEREINFORCEMENTAREA
}
