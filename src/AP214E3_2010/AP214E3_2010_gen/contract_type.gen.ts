
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/contract_type.htm */
export  class contract_type extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONTRACT_TYPE
  }
  private description_? : string

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 0, false )
    }

    return this.description_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONTRACT_TYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONTRACT_TYPE
}
