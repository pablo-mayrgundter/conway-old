
import { kinematic_pair } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/screw_pair.htm */
export  class screw_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SCREW_PAIR
  }
  private pitch_? : number

  public get pitch() : number {
    if ( this.pitch_ === void 0 ) {
      this.pitch_ = this.extractNumber( 5, false )
    }

    return this.pitch_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SCREW_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SCREW_PAIR
}
