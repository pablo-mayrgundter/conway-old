
import { point } from "./index"
import { surface } from "./index"
import { definitional_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/degenerate_pcurve.htm */
export  class degenerate_pcurve extends point {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DEGENERATE_PCURVE
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DEGENERATE_PCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DEGENERATE_PCURVE
}
