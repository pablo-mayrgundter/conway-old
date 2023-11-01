
import { product_definition_effectivity } from "./index"
import { configuration_design } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/configuration_effectivity.htm */
export  class configuration_effectivity extends product_definition_effectivity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONFIGURATION_EFFECTIVITY
  }
  private configuration_? : configuration_design

  public get configuration() : configuration_design {
    if ( this.configuration_ === void 0 ) {
      this.configuration_ = this.extractElement( 2, false, configuration_design )
    }

    return this.configuration_ as configuration_design
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONFIGURATION_EFFECTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONFIGURATION_EFFECTIVITY
}
