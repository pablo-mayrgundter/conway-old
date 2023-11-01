
import { half_space_solid } from "./index"
import { box_domain } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/boxed_half_space.htm */
export  class boxed_half_space extends half_space_solid {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BOXED_HALF_SPACE
  }
  private enclosure_? : box_domain

  public get enclosure() : box_domain {
    if ( this.enclosure_ === void 0 ) {
      this.enclosure_ = this.extractElement( 3, false, box_domain )
    }

    return this.enclosure_ as box_domain
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.BOXED_HALF_SPACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BOXED_HALF_SPACE
}
