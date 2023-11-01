
import { product_definition_formation } from "./index"
import { source, sourceDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition_formation_with_specified_source.htm */
export  class product_definition_formation_with_specified_source extends product_definition_formation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION_FORMATION_WITH_SPECIFIED_SOURCE
  }
  private make_or_buy_? : source

  public get make_or_buy() : source {
    if ( this.make_or_buy_ === void 0 ) {
      this.make_or_buy_ = this.extractLambda( 3, sourceDeserializeStep, false )
    }

    return this.make_or_buy_ as source
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_DEFINITION_FORMATION_WITH_SPECIFIED_SOURCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION_FORMATION_WITH_SPECIFIED_SOURCE
}
