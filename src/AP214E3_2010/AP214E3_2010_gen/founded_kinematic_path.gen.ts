
import { representation } from "./index"
import { kinematic_path } from "./index"
import { geometric_representation_context } from "./index"
import {
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/founded_kinematic_path.htm */
export  class founded_kinematic_path extends representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FOUNDED_KINEMATIC_PATH
  }
  private SELF\representation.items_? : Array<kinematic_path>
  private SELF\representation.context_of_items_? : geometric_representation_context

  public get SELF\representation.items() : Array<kinematic_path> {
    if ( this.SELF\representation.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 3 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<kinematic_path> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, kinematic_path )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.SELF\representation.items_ = value
    }

    return this.SELF\representation.items_ as Array<kinematic_path>
  }

  public get SELF\representation.context_of_items() : geometric_representation_context {
    if ( this.SELF\representation.context_of_items_ === void 0 ) {
      this.SELF\representation.context_of_items_ = this.extractElement( 4, false, geometric_representation_context )
    }

    return this.SELF\representation.context_of_items_ as geometric_representation_context
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FOUNDED_KINEMATIC_PATH ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FOUNDED_KINEMATIC_PATH
}
