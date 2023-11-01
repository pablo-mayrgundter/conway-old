
import { geometric_representation_item } from "./index"
import { connected_edge_set } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/edge_based_wireframe_model.htm */
export  class edge_based_wireframe_model extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EDGE_BASED_WIREFRAME_MODEL
  }
  private ebwm_boundary_? : Array<connected_edge_set>

  public get ebwm_boundary() : Array<connected_edge_set> {
    if ( this.ebwm_boundary_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<connected_edge_set> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, connected_edge_set )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.ebwm_boundary_ = value
    }

    return this.ebwm_boundary_ as Array<connected_edge_set>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EDGE_BASED_WIREFRAME_MODEL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EDGE_BASED_WIREFRAME_MODEL
}
