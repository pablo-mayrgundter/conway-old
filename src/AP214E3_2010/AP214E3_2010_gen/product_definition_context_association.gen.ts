
import { product_definition } from "./index"
import { product_definition_context } from "./index"
import { product_definition_context_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition_context_association.htm */
export  class product_definition_context_association extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION_CONTEXT_ASSOCIATION
  }
  private definition_? : product_definition
  private frame_of_reference_? : product_definition_context
  private role_? : product_definition_context_role

  public get definition() : product_definition {
    if ( this.definition_ === void 0 ) {
      this.definition_ = this.extractElement( 0, false, product_definition )
    }

    return this.definition_ as product_definition
  }

  public get frame_of_reference() : product_definition_context {
    if ( this.frame_of_reference_ === void 0 ) {
      this.frame_of_reference_ = this.extractElement( 1, false, product_definition_context )
    }

    return this.frame_of_reference_ as product_definition_context
  }

  public get role() : product_definition_context_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 2, false, product_definition_context_role )
    }

    return this.role_ as product_definition_context_role
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_DEFINITION_CONTEXT_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION_CONTEXT_ASSOCIATION
}
