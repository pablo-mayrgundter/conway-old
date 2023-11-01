
import { conic } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ellipse.htm */
export  class ellipse extends conic {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ELLIPSE
  }
  private semi_axis_1_? : number
  private semi_axis_2_? : number

  public get semi_axis_1() : number {
    if ( this.semi_axis_1_ === void 0 ) {
      this.semi_axis_1_ = this.extractNumber( 2, false )
    }

    return this.semi_axis_1_ as number
  }

  public get semi_axis_2() : number {
    if ( this.semi_axis_2_ === void 0 ) {
      this.semi_axis_2_ = this.extractNumber( 3, false )
    }

    return this.semi_axis_2_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ELLIPSE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ELLIPSE
}
