
import { representation } from "./index"
import { geometric_representation_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/presentation_representation.htm */
export  class presentation_representation extends representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRESENTATION_REPRESENTATION
  }
  private SELF\representation.context_of_items_? : geometric_representation_context

  public get SELF\representation.context_of_items() : geometric_representation_context {
    if ( this.SELF\representation.context_of_items_ === void 0 ) {
      this.SELF\representation.context_of_items_ = this.extractElement( 3, false, geometric_representation_context )
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
    [ EntityTypesIfc.PRESENTATION_REPRESENTATION, EntityTypesIfc.PRESENTATION_AREA, EntityTypesIfc.PRESENTATION_VIEW ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRESENTATION_REPRESENTATION
}
