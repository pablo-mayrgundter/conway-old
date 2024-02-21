
import { text_literal } from "./index"
import { representation_map } from "./index"
import { representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class dimension_text_associativity extends text_literal {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DIMENSION_TEXT_ASSOCIATIVITY
  }
  private mapping_source_? : representation_map
  private mapping_target_? : representation_item

  public get mapping_source() : representation_map {
    if ( this.mapping_source_ === void 0 ) {
      this.mapping_source_ = this.extractElement( 6, false, representation_map )
    }

    return this.mapping_source_ as representation_map
  }

  public get mapping_target() : representation_item {
    if ( this.mapping_target_ === void 0 ) {
      this.mapping_target_ = this.extractElement( 7, false, representation_item )
    }

    return this.mapping_target_ as representation_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DIMENSION_TEXT_ASSOCIATIVITY ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DIMENSION_TEXT_ASSOCIATIVITY
}
