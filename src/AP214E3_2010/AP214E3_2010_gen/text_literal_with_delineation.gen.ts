
import { text_literal } from "./index"
import { text_delineation } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class text_literal_with_delineation extends text_literal {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.TEXT_LITERAL_WITH_DELINEATION
  }
  private delineation_? : string

  public get delineation() : string {
    if ( this.delineation_ === void 0 ) {
      this.delineation_ = this.extractString( 6, false )
    }

    return this.delineation_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.TEXT_LITERAL_WITH_DELINEATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.TEXT_LITERAL_WITH_DELINEATION
}
