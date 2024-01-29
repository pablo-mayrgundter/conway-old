
import { label } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class action_method extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ACTION_METHOD
  }
  private name_? : string
  private description_? : string | null
  private consequence_? : string
  private purpose_? : string

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get consequence() : string {
    if ( this.consequence_ === void 0 ) {
      this.consequence_ = this.extractString( 2, false )
    }

    return this.consequence_ as string
  }

  public get purpose() : string {
    if ( this.purpose_ === void 0 ) {
      this.purpose_ = this.extractString( 3, false )
    }

    return this.purpose_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ACTION_METHOD ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ACTION_METHOD
}
