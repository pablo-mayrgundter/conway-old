
import { IfcTextureCoordinate } from "./index"
import { IfcLabel } from "./index"
import { IfcReal } from "./index"
import {
  stepExtractOptional,
  stepExtractNumber,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctexturecoordinategenerator.htm */
export  class IfcTextureCoordinateGenerator extends IfcTextureCoordinate {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR
  }
  private Mode_? : string
  private Parameter_? : Array< number > | null

  public get Mode() : string {
    if ( this.Mode_ === void 0 ) {
      this.Mode_ = this.extractString( 1, false )
    }

    return this.Mode_ as string
  }

  public get Parameter() : Array< number > | null {
    if ( this.Parameter_ === void 0 ) {
      this.Parameter_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

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

    return this.Parameter_ as Array< number > | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR
}
