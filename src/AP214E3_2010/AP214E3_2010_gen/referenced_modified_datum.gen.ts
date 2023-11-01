
import { datum_reference } from "./index"
import { limit_condition, limit_conditionDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/referenced_modified_datum.htm */
export  class referenced_modified_datum extends datum_reference {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REFERENCED_MODIFIED_DATUM
  }
  private modifier_? : limit_condition

  public get modifier() : limit_condition {
    if ( this.modifier_ === void 0 ) {
      this.modifier_ = this.extractLambda( 2, limit_conditionDeserializeStep, false )
    }

    return this.modifier_ as limit_condition
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REFERENCED_MODIFIED_DATUM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REFERENCED_MODIFIED_DATUM
}
