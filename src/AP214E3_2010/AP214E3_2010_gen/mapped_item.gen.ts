
import { representation_item } from "./index"
import { representation_map } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/mapped_item.htm */
export  class mapped_item extends representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MAPPED_ITEM
  }
  private mapping_source_? : representation_map
  private mapping_target_? : representation_item

  public get mapping_source() : representation_map {
    if ( this.mapping_source_ === void 0 ) {
      this.mapping_source_ = this.extractElement( 1, false, representation_map )
    }

    return this.mapping_source_ as representation_map
  }

  public get mapping_target() : representation_item {
    if ( this.mapping_target_ === void 0 ) {
      this.mapping_target_ = this.extractElement( 2, false, representation_item )
    }

    return this.mapping_target_ as representation_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MAPPED_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MAPPED_ITEM
}
