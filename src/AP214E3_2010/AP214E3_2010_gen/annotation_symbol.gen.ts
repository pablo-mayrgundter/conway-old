
import { mapped_item } from "./index"
import { symbol_representation_map } from "./index"
import { symbol_target } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_symbol.htm */
export  class annotation_symbol extends mapped_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_SYMBOL
  }
  private SELF\mapped_item.mapping_source_? : symbol_representation_map
  private SELF\mapped_item.mapping_target_? : symbol_target

  public get SELF\mapped_item.mapping_source() : symbol_representation_map {
    if ( this.SELF\mapped_item.mapping_source_ === void 0 ) {
      this.SELF\mapped_item.mapping_source_ = this.extractElement( 3, false, symbol_representation_map )
    }

    return this.SELF\mapped_item.mapping_source_ as symbol_representation_map
  }

  public get SELF\mapped_item.mapping_target() : symbol_target {
    if ( this.SELF\mapped_item.mapping_target_ === void 0 ) {
      this.SELF\mapped_item.mapping_target_ = this.extractElement( 4, false, symbol_target )
    }

    return this.SELF\mapped_item.mapping_target_ as symbol_target
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_SYMBOL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_SYMBOL
}
