
import { invisibility } from "./index"
import { presentation_representation } from "./index"
import { presentation_set } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/context_dependent_invisibility.htm */
export  class context_dependent_invisibility extends invisibility {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONTEXT_DEPENDENT_INVISIBILITY
  }
  private presentation_context_? : presentation_representation | presentation_set

  public get presentation_context() : presentation_representation | presentation_set {
    if ( this.presentation_context_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof presentation_representation ) && !( value instanceof presentation_set ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.presentation_context_ = value as (presentation_representation | presentation_set)

    }

    return this.presentation_context_ as presentation_representation | presentation_set
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONTEXT_DEPENDENT_INVISIBILITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONTEXT_DEPENDENT_INVISIBILITY
}
