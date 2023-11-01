
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/document_type.htm */
export  class document_type extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DOCUMENT_TYPE
  }
  private product_data_type_? : string

  public get product_data_type() : string {
    if ( this.product_data_type_ === void 0 ) {
      this.product_data_type_ = this.extractString( 0, false )
    }

    return this.product_data_type_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DOCUMENT_TYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DOCUMENT_TYPE
}
