
import { text_literal } from "./index"
import { text_delineation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_literal_with_delineation.htm */
export  class text_literal_with_delineation extends text_literal {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_LITERAL_WITH_DELINEATION
  }
  private delineation_? : string

  public get delineation() : string {
    if ( this.delineation_ === void 0 ) {
      this.delineation_ = this.extractString( 6, false )
    }

    return this.delineation_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_LITERAL_WITH_DELINEATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_LITERAL_WITH_DELINEATION
}
