
import { label } from "./index"
import { text } from "./index"
import { resource_requirement_type } from "./index"
import { action } from "./index"
import { action_method } from "./index"
import { action_method_relationship } from "./index"
import { action_relationship } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_resource_requirement.htm */
export  class action_resource_requirement extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_RESOURCE_REQUIREMENT
  }
  private name_? : string
  private description_? : string
  private kind_? : resource_requirement_type
  private OPERATIONS_? : Array<action | action_method | action_method_relationship | action_relationship>

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }

  public get kind() : resource_requirement_type {
    if ( this.kind_ === void 0 ) {
      this.kind_ = this.extractElement( 2, false, resource_requirement_type )
    }

    return this.kind_ as resource_requirement_type
  }

  public get OPERATIONS() : Array<action | action_method | action_method_relationship | action_relationship> {
    if ( this.OPERATIONS_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 3 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<action | action_method | action_method_relationship | action_relationship> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof action ) && !( value1Untyped instanceof action_method ) && !( value1Untyped instanceof action_method_relationship ) && !( value1Untyped instanceof action_relationship ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (action | action_method | action_method_relationship | action_relationship)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.OPERATIONS_ = value
    }

    return this.OPERATIONS_ as Array<action | action_method | action_method_relationship | action_relationship>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ACTION_RESOURCE_REQUIREMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_RESOURCE_REQUIREMENT
}
