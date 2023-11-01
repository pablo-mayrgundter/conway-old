
import { conic } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/hyperbola.htm */
export  class hyperbola extends conic {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.HYPERBOLA
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.HYPERBOLA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.HYPERBOLA
}
