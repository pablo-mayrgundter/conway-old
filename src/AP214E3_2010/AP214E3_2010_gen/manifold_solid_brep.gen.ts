
import { solid_model } from "./index"
import { closed_shell } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/manifold_solid_brep.htm */
export  class manifold_solid_brep extends solid_model {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MANIFOLD_SOLID_BREP
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MANIFOLD_SOLID_BREP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MANIFOLD_SOLID_BREP
}
