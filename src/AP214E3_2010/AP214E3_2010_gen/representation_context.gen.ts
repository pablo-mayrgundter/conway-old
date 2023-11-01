
import { identifier } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/representation_context.htm */
export  class representation_context extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REPRESENTATION_CONTEXT
  }
  private context_identifier_? : string
  private context_type_? : string

  public get context_identifier() : string {
    if ( this.context_identifier_ === void 0 ) {
      this.context_identifier_ = this.extractString( 0, false )
    }

    return this.context_identifier_ as string
  }

  public get context_type() : string {
    if ( this.context_type_ === void 0 ) {
      this.context_type_ = this.extractString( 1, false )
    }

    return this.context_type_ as string
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REPRESENTATION_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REPRESENTATION_CONTEXT
}
