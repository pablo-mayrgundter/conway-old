
import { label } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class uncertainty_qualifier extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.UNCERTAINTY_QUALIFIER
  }
  private measure_name_? : string
  private description_? : string

  public get measure_name() : string {
    if ( this.measure_name_ === void 0 ) {
      this.measure_name_ = this.extractString( 0, false )
    }

    return this.measure_name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.UNCERTAINTY_QUALIFIER, EntityTypesAP214.STANDARD_UNCERTAINTY, EntityTypesAP214.QUALITATIVE_UNCERTAINTY ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.UNCERTAINTY_QUALIFIER
}
