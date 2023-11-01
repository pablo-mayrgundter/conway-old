
import { item_identified_representation_usage } from "./index"
import { shape_aspect } from "./index"
import { shape_representation } from "./index"
import { geometric_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_item_specific_usage.htm */
export  class geometric_item_specific_usage extends item_identified_representation_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_ITEM_SPECIFIC_USAGE
  }
  private SELF\item_identified_representation_usage.definition_? : shape_aspect
  private SELF\item_identified_representation_usage.used_representation_? : shape_representation
  private SELF\item_identified_representation_usage.identified_item_? : geometric_representation_item

  public get SELF\item_identified_representation_usage.definition() : shape_aspect {
    if ( this.SELF\item_identified_representation_usage.definition_ === void 0 ) {
      this.SELF\item_identified_representation_usage.definition_ = this.extractElement( 5, false, shape_aspect )
    }

    return this.SELF\item_identified_representation_usage.definition_ as shape_aspect
  }

  public get SELF\item_identified_representation_usage.used_representation() : shape_representation {
    if ( this.SELF\item_identified_representation_usage.used_representation_ === void 0 ) {
      this.SELF\item_identified_representation_usage.used_representation_ = this.extractElement( 6, false, shape_representation )
    }

    return this.SELF\item_identified_representation_usage.used_representation_ as shape_representation
  }

  public get SELF\item_identified_representation_usage.identified_item() : geometric_representation_item {
    if ( this.SELF\item_identified_representation_usage.identified_item_ === void 0 ) {
      this.SELF\item_identified_representation_usage.identified_item_ = this.extractElement( 7, false, geometric_representation_item )
    }

    return this.SELF\item_identified_representation_usage.identified_item_ as geometric_representation_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_ITEM_SPECIFIC_USAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_ITEM_SPECIFIC_USAGE
}
