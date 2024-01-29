
import { solid_model } from "./index"
import { closed_shell } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class manifold_solid_brep extends solid_model {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.MANIFOLD_SOLID_BREP
  }
  private outer_? : closed_shell

  public get outer() : closed_shell {
    if ( this.outer_ === void 0 ) {
      this.outer_ = this.extractElement( 1, false, closed_shell )
    }

    return this.outer_ as closed_shell
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.MANIFOLD_SOLID_BREP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.MANIFOLD_SOLID_BREP
}
