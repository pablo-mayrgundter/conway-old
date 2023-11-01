
import { text_literal } from "./index"
import { planar_extent } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_literal_with_extent.htm */
export  class text_literal_with_extent extends text_literal {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_LITERAL_WITH_EXTENT
  }
  private extent_? : planar_extent

  public get extent() : planar_extent {
    if ( this.extent_ === void 0 ) {
      this.extent_ = this.extractElement( 6, false, planar_extent )
    }

    return this.extent_ as planar_extent
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_LITERAL_WITH_EXTENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_LITERAL_WITH_EXTENT
}
