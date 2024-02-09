
import { conic } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class hyperbola extends conic {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.HYPERBOLA
  }
  private semi_axis_? : number
  private semi_imag_axis_? : number

  public get semi_axis() : number {
    if ( this.semi_axis_ === void 0 ) {
      this.semi_axis_ = this.extractNumber( 2, false )
    }

    return this.semi_axis_ as number
  }

  public get semi_imag_axis() : number {
    if ( this.semi_imag_axis_ === void 0 ) {
      this.semi_imag_axis_ = this.extractNumber( 3, false )
    }

    return this.semi_imag_axis_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.HYPERBOLA ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.HYPERBOLA
}
