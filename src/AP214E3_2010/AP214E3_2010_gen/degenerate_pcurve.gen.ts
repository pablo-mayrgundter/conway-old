
import { point } from "./index"
import { surface } from "./index"
import { definitional_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class degenerate_pcurve extends point {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DEGENERATE_PCURVE
  }
  private basis_surface_? : surface
  private reference_to_curve_? : definitional_representation

  public get basis_surface() : surface {
    if ( this.basis_surface_ === void 0 ) {
      this.basis_surface_ = this.extractElement( 1, false, surface )
    }

    return this.basis_surface_ as surface
  }

  public get reference_to_curve() : definitional_representation {
    if ( this.reference_to_curve_ === void 0 ) {
      this.reference_to_curve_ = this.extractElement( 2, false, definitional_representation )
    }

    return this.reference_to_curve_ as definitional_representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DEGENERATE_PCURVE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DEGENERATE_PCURVE
}
