
import { geometric_representation_item } from "./index"
import { surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/half_space_solid.htm */
export  class half_space_solid extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.HALF_SPACE_SOLID
  }
  private base_surface_? : surface
  private agreement_flag_? : boolean

  public get base_surface() : surface {
    if ( this.base_surface_ === void 0 ) {
      this.base_surface_ = this.extractElement( 1, false, surface )
    }

    return this.base_surface_ as surface
  }

  public get agreement_flag() : boolean {
    if ( this.agreement_flag_ === void 0 ) {
      this.agreement_flag_ = this.extractBoolean( 2, false )
    }

    return this.agreement_flag_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.HALF_SPACE_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.HALF_SPACE_SOLID
}
