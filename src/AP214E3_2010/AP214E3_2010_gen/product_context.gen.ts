
import { application_context_element } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_context.htm */
export  class product_context extends application_context_element {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_CONTEXT
  }
  private discipline_type_? : string

  public get discipline_type() : string {
    if ( this.discipline_type_ === void 0 ) {
      this.discipline_type_ = this.extractString( 2, false )
    }

    return this.discipline_type_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_CONTEXT
}
